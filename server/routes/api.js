const express = require('express');
const router  = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose')
const db = "mongodb+srv://admin:admin@cluster0.ox2fb.mongodb.net/DB?retryWrites=true&w=majority";

mongoose.connect(db,{ useNewUrlParser: true ,useUnifiedTopology: true}, error =>{
    if(error){
        console.log('Error: '+error)
    }else{
        console.log('connection succesfull')
    }
})

router.get('/',(req,res) =>{
    res.send("Hello from api route")
});

router.post('/register', (req,res) =>{
    
    let userData = req.body;
    let user = new User(userData);

    user.save((error,register) =>{
        if(error){
            console.log('error: '+error);
        }else{
            let payload = {subject:register._id};
            let token = jwt.sign(payload,"topSecretUser")
            
            res.status(200).send({token});
        }
    })
})


router.post('/login',(req,res)=>{
    let userData = req.body;
    
    User.findOne({email:userData.email},(error,user)=>{

        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }
           else if(user.password !==userData.password){
                res.status(401).send('Invalid password');
            }else{
                let payload ={subject:user._id} 
                let token = jwt.sign(payload,"topSecretUser")
                res.status(200).send({token});
            }
        }

    })
})

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unathorized request!');
    }
    let token = req.headers.authorization[1];
    if(token==='null'){
        return res.status(401).send('Unathorized request!');
    }
    let payload = jwt.verify(token,'topSecretUser');
    if(!payload){
        return res.status(401).send('Unathorized request!');
    }
    req.userId = payload.subject;
    next();
}

module.exports = router;