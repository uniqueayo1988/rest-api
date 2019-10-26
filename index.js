const express = require('express')
const bodyParser = require('body-parser')
const logger = require('./logger/logger')
const app = express()
const port = 3070

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('This App is Working...')
})

app.use('/api', require('./routes/routes'))

app.use('*', (req, res) => {
  logger.info('users undefined route')
  res.send('Please, check your route')
})

app.listen(port, (err) => {
  // console.log('running server on from port:::::' + port)
  logger.info('running server on from port:::::' + port)
})
