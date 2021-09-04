const { PORT } = require('./config/globals.js');
const { getConnection } = require('./dao/db/connection');

const app = require('./server');

getConnection().then((message) => {
    app.listen(PORT, () => {
        console.log(`Listen on port: ${PORT}`);
    })
}).catch(console.log);