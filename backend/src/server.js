const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bCrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const { MONGO_URI, FRONT_URL } = require("./config/globals");
const MongoStore = require("connect-mongo");
const User = require("./dao/models/user");

// Logs
const logger = require('./logs/logger');
const loggerInfo = logger.getLogger('info');
const loggerWarn = logger.getLogger('warn');
const loggerError = logger.getLogger('error');

const gmail  = require('./email/nodemailer-gmail.js');
const twilio = require('./sms/twilio.js');

const router = express.Router();

const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

app.use(productRoutes(router));
app.use(cartRoutes(router));

passport.use(
    "login",
    new LocalStrategy(
      {
        passReqToCallback: true,
      },
      function (req, username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) return done(err);
          if (!user) {
            loggerWarn.warn("User Not Found with username " + username);
            loggerWarn.warn("message", "User Not found.");
            return done(null, false);
          }
          if (!isValidPassword(user, password)) {
            loggerError.error("Invalid Password");
            loggerError.error("Invalid Password");
            return done(null, false);
          }
          return done(null, user);
        });
      }
    )
  );

  var isValidPassword = function (user, password) {
    return bCrypt.compareSync(password, user.password);
  };

  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
      },
      function (req, username, password, done) {
        const findOrCreateUser = function () {
          User.findOne({ username: username }, function (err, user) {
            if (err) {
              loggerError.error("Error in SignUp: " + err);
              return done(err);
            }
            if (user) {
              loggerWarn.warn("User already exists");
              loggerWarn.warn("message", "User Already Exists");
              return done(null, false);
            } else {
              var newUser = new User();
              newUser.username = username;
              newUser.password = createHash(password);
              newUser.name = req.body.name;
              newUser.address = req.body.address;
              newUser.email = req.body.email;
              newUser.age = req.body.age;
              newUser.phone = req.body.phone;
              newUser.picture = req.body.picture;
              newUser.provider = 'local';

              newUser.save(function (err) {
                if (err) {
                  loggerError.error("Error in Saving user: " + err);
                  throw err;
                }
                loggerInfo.info("User Registration succesful");
                return done(null, newUser);
              });
            }
          });
        };
        process.nextTick(findOrCreateUser);
      }
    )
  );

  var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  app.use(
    session({
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
        mongoOptions: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      }),
      secret: process.env.SECRET_KEY,
      cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 20000,
      },
      rolling: true,
      resave: true,
      saveUninitialized: false,
    })
  );

  app.use(cookieParser());
  app.use(express.json());

  app.use(passport.initialize());
  app.use(passport.session());

  // ------------------------------------------------------------------------------
  //  ROUTING GET POST
  // ------------------------------------------------------------------------------

  app.post("/login", passport.authenticate("login", { failureRedirect: "/faillogin" }),
    (req, res) => {
      res.redirect(`${FRONT_URL}/home`);
    }
  );

  app.get("/faillogin", (req, res) => {
    res.redirect(`${FRONT_URL}/loginError`);
  });

  app.post("/register", passport.authenticate("register", { failureRedirect: "/failregister" }),
    (req, res) => {
      let nombre = req.user.username;
      let email = process.env.EMAIL_ADMIN;
      let asunto = 'Nuevo registro';
      let mensaje = `<p>Se registró el usuario ${nombre} con los sigientes datos:</p><p>${req.user}</p>`;

      //Registro de datos de usuario por gmail al Admin
      gmail.enviarMail(asunto, mensaje, email, (err, info) => {
          if(err) loggerError.error(err)
          else loggerInfo.info(info)
      });
      res.redirect(`${FRONT_URL}/home`);
    }
  );

  app.get("/failregister", (req, res) => {
    res.redirect(`${FRONT_URL}/registerError`);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect(`${FRONT_URL}`);
  });

module.exports = app;