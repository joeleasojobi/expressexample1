var express=require('express')

var app=express()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/home',(req,res)=>{
    res.send("this is a home page")
})

app.listen(3000,()=>{
    console.log("Server started at ");
})