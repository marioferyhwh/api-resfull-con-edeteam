const express = require('express'),
      config = require('./config'),
      app= express(),
      router = require('./router')

      c=console.log


app
  .set('port',process.env.PORT)
  .use(express.urlencoded({extended:false}))
  .use(express.json())
  .use((req,res,next)=>{
    //https://enable-cors.org
    res.header('Access-Control-Allow-Origin','*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')
    next();
  })
  .use('/api',router)

  module.exports=app