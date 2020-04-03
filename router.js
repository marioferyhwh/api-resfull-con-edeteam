const express = require('express'),
api = express.Router()


api
.get('/',async(req,res)=>{
  await res.status(200).send({
    message : 'funcionamiento de api res full con node js y mongo db'
  })
})
module.exports = api 