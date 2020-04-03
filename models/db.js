const c = console.log,
      mongoose = require ('mongoose'),
      config = require ('../config')

class Database {
  constructor(){
    this.connect()
  }
  connect(){
    mongoose.connect(process.env.URL_DB,{ useNewUrlParser: true } )
    .then (()=> c(`Conexion exitosa a la base de datos :${process.env.URL_DB}`))
    .catch(err => c(`Errro concexion DB :${err}`))

  }
}
module.exports = new Database()

      