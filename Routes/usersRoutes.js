const express = require('express')
const router = express.Router()
const usersModel = require('../Models/usersModel')

router.get('/', async (req, res) => {
  const users = await usersModel.findAll()
  res.json({
    data: users,
    metadata: "users endpoint"
  })
})

router.post('/register', async (req, res) => {
  const {username, password} = req.body
  const user = await usersModel.create({
    username, password
  })
  res.json({
    data: user,
    metadata: "users endpoint"
  })
})

router.put('/update', async (req, res) => {
  const {username, password, passwordBaru} = req.body
  const useData = await usersModel.findOne({where : {username: username, password: password}})
  // const user = await usersModel.update({
  //   username, password: passwordBaru
  // })
  res.json(useData)
  // if (userData === user) {

  // }
  // res.json({
  //   data: user,
  //   metadata: "users endpoint"
  // })
})

router.post('/login', async (req, res) => {
  const {username, password} = req.body
  res.json({
    data: {username, password},
    metadata: "login endpoint"
  })
})

module.exports = router