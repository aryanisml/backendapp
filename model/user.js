const mongoose = require('mongoose');
//const   {mongoClient} = require('mongodb');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
}, {
    collection: 'users'
});

// userSchema.plugin(uniqueValidator, {message : 'Email already in use'});

module.exports = mongoose.model('User', userSchema);