const mongoose = require('mongoose')

const docSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    identifier: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    exported: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Doc', docSchema)