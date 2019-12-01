var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('../logger/logger'),
  app = express()

const users = [
  {id: "1", firstname: "Dele", lastName: "Adigun", userName: "deleA"},
  {id: "2", firstname: "John", lastName: "Wick", userName: "johnW"},
  {id: "3", firstname: "Smith", lastName: "Lot", userName: "smithL"}
]

app.get('/users', (req, res) => {
  res.status(200).json(users)
  // res.send(users)
})

app.post('/user', (req, res) => {
  const id = users.length + 1
  const createdDate = Date.now().toString()
  const newUser = req.body
  users.push({
    ...newUser,
    id: id.toString(),
    createdDate
  })
  res.status(201).json(users)
})

app.get('/users/:id', (req, res) => {
  logger.info('filter users by username:::'+req.params.id)
  let user = users.filter(user => {
    if (req.params.id === user.id) {
      return user
    }
  })
  res.status(200).json(user)
})

app.put('/users/:id', (req, res) => {
  logger.info('filter users by username:::'+req.params.id)
  let user = users.filter(user => {
    if (req.params.id === user.id) {
      user.username = req.body.username
      return user
    }
  })
  res.status(200).json(user)
})

app.delete('/users/:id', (req, res) => {
  logger.info('filter users by username:::'+req.params.id)
  let user = users.filter(user => {
    if (req.params.id === user.id) {
      users.splice(users.indexOf(user), 1)
      return users
    }
  })
  res.status(200).json({message: "User deleted Successfully"})
})

module.exports = app
