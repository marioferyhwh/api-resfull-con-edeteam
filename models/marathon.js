const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      MarathoSchema = new Schema({
        /** */
        name:{
          type:String,
          require :[true,'el nombre de requeridos']
        },
        country:{
          type:Schema.Types.ObjectId,
          ref:'Country',
          require :[true,'el nombre de requeridos']
        },
        location:{
          type:String,
          require :[true,'el nombre de requeridos']
        },
        altitud:Number,
        race_web:{
          type:String,
          lowercase:true
        },
        race_logo :String,
        race_since :String,
        race_day:String,
        race_date:Date,
        race_type:{
          type:String,
          enum:['City','Trail'],
          default:'City'
        },
        distance :{
          type:Number,
          min:42.195,
          default:42.195
        },
        resumen:String
      })



      module.exports = mongoose.model('Marathon',MarathoSchema) 