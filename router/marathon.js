const Marathon = require('../models/marathon')

const apiResponse = ((req,res,err,data)=>{
  if (err){
    res.status(500).send({
      message:`error Inteno del servidor ${err}`
    })            
  }
  if (data){
  res.status(200).send({data})
  }
  else{
   // res.status(404).send('nada')
    res.status(404).send(`no hay datos con esoso parametros`)

  }
})

const getMarathons = async(req,res) =>{
  await Marathon.find({}).populate('country','name code').sort({'_id':-1}).exec((err,data)=>apiResponse(req,res,err,data))
},
postMarathon = async(req,res) =>{
  console.log(req.body)
  let marathon = new Marathon(req.body)
  await marathon.save((err,data)=>apiResponse(req,res,err,data))
},
getMarathon = async(req,res) =>{
  await Marathon
  .findById(req.params.id)
  .exec((err,data)=>apiResponse(req,res,err,data))
},
putMarathon = async(req,res) =>{
  //console.log(req.params.id,req.body)
  await Marathon
  .findByIdAndUpdate(req.params.id,req.body,{new:true},(err,data)=>apiResponse(req,res,err,data))
},
deleteMarathon = async(req,res) =>{
  
  //console.log(req.params.id)
  await Marathon
  .findByIdAndRemove(req.params.id,(err,data)=>apiResponse(req,res,err,data))
}
module.exports ={
  getMarathons,
  getMarathon,
  postMarathon,
  putMarathon,
  deleteMarathon
}