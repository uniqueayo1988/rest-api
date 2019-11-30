const express = require('express')
const bodyParser = require('body-parser')
const logger = require('./logger/logger')
const app = express()
const port = 3070

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

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
  logger.info('running server on from port::: ' + port)
})

// const http = require('http')
// const fs = require('fs')
// const httpPort = 80

// http.createServer((req, res) => {
//   fs.readFile('index.htm', 'utf-8', (err, content) => {
//     if (err) {
//       console.log('We cannot open "index.htm" file.')
//     }

//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     })

//     res.end(content)
//   })
// }).listen(httpPort, () => {
//   console.log('Server listening on: http://localhost:%s', httpPort)
// })
