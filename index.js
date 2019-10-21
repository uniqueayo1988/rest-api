var express = require('express')
// import express from 'express'
app = express()
port = 3070

app.get('/', (req, res) => {
  res.send('This App Works...')
})

app.listen(port, (err) => {
  console.log('running server on from port:::::' + port)
})
