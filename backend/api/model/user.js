const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    password:String,
    pensionType:String,
    address:String,
    contact:String,
    gender:String,
    city: String,
    state:String,
    pincode:String,
    otp: Number,
    photo: String,
    signature: String,
    certificate: String
})



module.exports = mongoose.model('User', userSchema);