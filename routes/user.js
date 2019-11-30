var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('../logger/logger'),
  app = express()

const users = [
  {id: 1, firstname: "Dele", lastName: "Adigun", userName: "deleA"},
  {id: 2, firstname: "John", lastName: "Wick", userName: "johnW"},
  {id: 2, firstname: "Smith", lastName: "Lot", userName: "smithL"}
]

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
  const id = users.length + 1
  const createdDate = Date.now().toString()
  const newUser = req.body
  users.push({
    ...newUser,
    id,
    createdDate
  })
  res.status(201).json(users)
})

module.exports = app
