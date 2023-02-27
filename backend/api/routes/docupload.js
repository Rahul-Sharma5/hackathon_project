const path = require('path')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer')


// ! Connection User Model file
const Docupload = require('../model/docupload');

/* router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Docupload router working'
    })
}) */

// ! Storage //
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})


var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ) {
            callback(null, true)
        } else {
            console.log('Only jpg & png file supported!')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
}).fields([{ name: 'photo'}, { name: 'signature'}, { name: 'certificate'}])



// ! Upload Router //
router.post('/upload', upload, (req, res, next) => {

    const upload = new Docupload({
        _id: new mongoose.Types.ObjectId,
        aadhar: req.body.aadhar,
        pan: req.body.pan,
        photo: req.files.photo[0].path,
        signature: req.files.signature[0].path,
        certificate: req.files.certificate[0].path
    })
    upload.save()
        .then(result => {
            /*  console.log(result); */
            res.status(200).json({
                newDocupload: result
            })
        })
        .catch(err => {
            /* console.log(err); */
            res.status(500).json({
                error: err
            })
        })
})


module.exports = router;