const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// ! Connection User Model file
const User = require('../model/user');


// ! Hashing Password for Register Here //
const securepassword = async (password) => {

    try {

        const passwordHash = await bcrypt.hash(password, 10);
        return passwordHash;

    } catch (error) {
        res.status(400).send(error.message);
    }

}

// ! Signup Router //
router.post('/signup', async (req, res, next) => {

    const { name, email, password, pensionType } = req.body;

    if (!name || !email || !password || !pensionType) {
        return res.status(422).json({ error: "please fill all data" });
    }

    try {
        const spassword = await securepassword(req.body.password)
        const user = new User({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            email: req.body.email,
            password: spassword,
            pensionType: req.body.pensionType
        });

        const userData = await User.findOne({ email: req.body.email })

        if (userData) {
            return res.status(422).json({ error: "Email already registered" });
        } else {
            await user.save();
            res.status(200).json({ message: "user registered successfuly" });
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
})

// ! Loginin Router //
router.post('/signin', (req, res, next) => {

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Plz Filled the data" })
    }

    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    msg: 'user not found'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (!result) {
                    return res.status(401).json({
                        msg: 'Password wrong'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        name: user[0].name,
                        email: user[0].email,
                        pensionType: user[0].pensionType,
                        theme: "red",
                        id: user[0]._id
                    },
                        'this is dummy text',
                        {
                            expiresIn: "24h"
                        }
                    );
                    res.status(200).json({
                        /* name:user[0].name,
                        email:user[0].email, */
                        token
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

})

// ! For Get Request | retrive One Data From DataBase //
router.get('/viewuser/:id', (req, res, next) => {
    /* console.log(req.params.id); */
    User.findById(req.params.id)
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

// ! Patch Requset // Additional User Details  //
router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });

        /* console.log(updateduser); */
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;