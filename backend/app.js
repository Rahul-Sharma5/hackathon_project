const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// ! Connected Routes File //
const userRouter = require('./api/routes/user');
const validateRouter = require('./api/routes/uservalidate')
const docuploadRouter = require('./api/routes/docupload')
/* const uploadRouter = require('./middleware/upload') */


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'))

// ! Router Part Start //
app.use('/',userRouter)
app.use('/uservalidate',validateRouter)
app.use('/docs',docuploadRouter)
/* app.use('/upload', uploadRouter) */
// ! Router Part End //



// ! Window Message
app.get('/', (req, res) =>{
    res.send("This is Backend Server");
 });

// ! Error Handling for Bad Url //
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Page not found'
    })
})
// ! Error Handling for Bad Url end //

module.exports = app;