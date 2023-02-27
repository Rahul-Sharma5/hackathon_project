const mongoose = require('mongoose');

const uservalidate = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:String,
    month: String,
    year: String,
    certificate: String
})

module.exports = mongoose.model('Validate', uservalidate);