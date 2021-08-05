require('dotenv')

const POST = process.env.POST || 5000;

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json())
server.use(cors());
server.use(helmet())

server.get('/api/users',(req,res)=>{
    res.send('array')
})

server.post('/api/register',(req,res)=>{
    const{username, password} = req.body;
    if(!username|| !password){
        res.status(400).json({message:"Please provide a username or password"})
    }else{
        res.json(req.body)
    }
})
server.post('/api/login',(req,res)=>{
    const{username, password} = req.body;
    if(!username|| !password){
        res.status(400).json({message:"Please provide a username or password"})
    }else{
        if(username === 'robert' && password ==='abc'){
            res.json("Welcome")
        }else{
            res.json("Username and Password does not match")
        }
        
    }
})

server.use('*',(req,res)=>{
    res.status(500).json({message:'could not reach the info'})
})

server.listen(POST,()=>{
    console.log(`listening to ${POST}`)
})