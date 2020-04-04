const Country = require('../models/country'),
fs=require('fs')

const PostCountries = async(req,res) =>{
  //await res.status(200).send({message: })
   const dd = fs.readFileSync('./models/countries.json','utf-8')
  //Console.log (dd)
  const countries = JSON.parse(dd)
  await Country.insertMany(countries,(err,data)=>{
    if (err){
      res.status(500).send({
        message:`error Inteno del servidor ${err}`
      })      
      //return
    }else{
    res.status(200).send({data})
    }
  })
}
const GetCountries = async(req,res) =>{
  //await res.status(200).send({message: })
  await Country.find({}).exec((err,data)=>{
    if (err){
      res.status(500).send({
        message:`error Inteno del servidor ${err}`
      })            
    }
    if (data){
    res.status(200).send({data})
    }
    else{
      res.status(404).send({message:`no se encontro informacion`})

    }
  })
}

module.exports = {
  PostCountries,
  GetCountries
}