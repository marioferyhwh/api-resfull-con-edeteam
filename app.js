const express = require('express'),
      config = require('./config')
      app= express(),
      router = require('./router')

      c=console.log


app
  .set('port',())
  .use(express.urlencoded({extended:false}))
  .use(express.json())
  .use('/api',router)

  module.exports=app