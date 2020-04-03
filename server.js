const c = console.log ,
      app = require('./app')
      db = require('./models/db')

      app.listen(app.get('port'),()=> c(`Iniciado servidor por el puerto ${app.get('port')}`))
