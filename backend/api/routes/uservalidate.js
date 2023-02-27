const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// ! Connection User Model file
const Validate = require('../model/uservalidate');

/* router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Validate router working'
    })
}) */

router.post('/validate', async (req, res, next) => {

    const validateuser = new Validate({
        _id: new mongoose.Types.ObjectId,
        email: req.body.email,
        month: req.body.month,
        year: req.body.year,
        certificate: req.body.certificate

    })

    validateuser.save()
        .then(result => {
            /*  console.log(result); */
            res.status(200).json({
                newValidate: result
            })
        })
        .catch(err => {
            /* console.log(err); */
            res.status(500).json({
                error: err
            })
        })
})


router.get('/:email', (req, res, next) => {
    Validate.find({email:req.params.email})
        .then(result => {
            res.status(200).json({
                result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})



module.exports = router;