const express = require('express')
const app = express()
require('./database')
const morgan = require('morgan')

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))


// Rutes
app.use('/api', require('./routes/user.routes'))
app.use('/login', require('./routes/login.routes'))

// Settings
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en puerto ${app.get('port')}`)
})
