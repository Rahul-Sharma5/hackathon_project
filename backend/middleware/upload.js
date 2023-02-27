const path = require('path')
const multer = require('multer')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer ({
    storage: Storage,
    fileFilter: function(req, file, callback) {
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ){
            callback(null, true)
        } else{
            console.log('Only jpg & png file supported!')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = router;
