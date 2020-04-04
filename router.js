const express = require('express'),
Country = require('./router/country'),
Marathon = require('./router/marathon'),
api = express.Router()


api
.get('/',async(req,res)=>{
  await res.status(200).send({
    message : 'funcionamiento de api res full con node js y mongo db'
  })
})
.post('/contries',Country.PostCountries)
.get('/contries',Country.GetCountries)
.get('/marathons',Marathon.getMarathons)
.post('/marathon',Marathon.postMarathon)
.get('/marathon/:id',Marathon.getMarathon)
.put('/marathon/:id',Marathon.putMarathon)
.delete('/marathon/:id',Marathon.deleteMarathon)
module.exports = api 