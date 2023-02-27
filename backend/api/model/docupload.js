const mongoose = require('mongoose');

const docuploadSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    aadhar:String,
    pan:String,
    photo: String,
    signature: String,
    certificate: String
})


module.exports = mongoose.model('Upload', docuploadSchema);