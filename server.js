const c = console.log ,
      app = require('./app')

      app.listen(app.get('port'),()=> c(`Iniciado servidor por el puerto ${app.get('port')}`))
