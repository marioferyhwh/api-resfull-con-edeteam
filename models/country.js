 /**
  * para solicitar los paises direccion
  * peric.github.io/GetCountries/
  */
const mogoose = require('mongoose'),
      Schema = mogoose.Schema,
      CountryShema = new Schema({
        code:{
          type:String,
          required:[true,'mensage de code'],
          unique:true
        },
        name:{
          type:String,
          required:[true,'nombre requerido'],
          unique:true
        }


      })

      module.exports = mogoose.model('Country',CountryShema)

