var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('../logger/logger'),
  app = express()

const users = [{firstname: "Dele", lastName: "Adigun", userName: "deleA"}]

app.get('/users', (req, res) => {
  res.json(users)
  // res.send(users)
})

app.get('/users/:userName', (req, res) => {
  logger.info('filter users by username:::'+req.params.userName)
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

module.exports = app
