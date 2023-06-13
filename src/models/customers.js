const mongoose = require('mongoose')

// MVC - MODEL VIEW CONTROLLER

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

const Model = mongoose.model('customers', schema)

module.exports = Model
