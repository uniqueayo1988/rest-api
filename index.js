var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('./logger/logger'),
  // import express from 'express'
  app = express(),
  port = 3070

const users = [{firstname: "Dele", lastName: "Adigun", userName: "deleA"}]

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('This App Works...')
})

app.get('/users', (req, res) => {
  res.json(users)
  // res.send(users)
})

app.get('/users/:userName', (req, res) => {
  let user = users.filter(user => {
    if (req.params.userName === user.userName) {
      return user
    }
  })
  res.json(user)
})

app.post('/user', (req, res) => {
  user.push(req.body)
  res.json(users)
})

app.get('*', (req, res) => {
  logger.info('users route....')
  res.send('How did I get here...')
})

app.listen(port, (err) => {
  // console.log('running server on from port:::::' + port)
  logger.info('running server on from port:::::' + port)
})
