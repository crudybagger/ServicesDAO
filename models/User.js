//make a User schema
// Path: models\User.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', User);