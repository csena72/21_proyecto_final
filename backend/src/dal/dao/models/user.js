const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    address: String,
    email: String,
    age: String,
    phone: String,
    picture: String,
    provider: String
})

module.exports = model('UserDao', userSchema);
