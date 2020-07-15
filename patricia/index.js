const express =require('express')
const app = express();
const nodemon =require('nodemon')
// console.log('hello')

app.get('/quotes',(req,res)=>{
    res.sendFile(-dirname +'/register.html')
})

app.post('/about',(req,res)=>{
   console.log('req.body');
})

app.listen(1000,()=>
console.log('listening on port 1000'));