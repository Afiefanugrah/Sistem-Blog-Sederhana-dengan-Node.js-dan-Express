const express = require('express')
const router = express.Router()
const usersModel = require('../Models/usersModel')
const bcrypt = require('bcrypt')

router.get('/', async (req, res) => {
  const users = await usersModel.findAll()
  res.json({
    data: users,
    metadata: "users endpoint"
  })
})

router.post('/register', async (req, res) => {
  const {username, password} = req.body
  const passwordBcrypt = await bcrypt.hash(password, 10)
  const user = await usersModel.create({
    username, password: passwordBcrypt
  })
  res.json({
    data: user,
    metadata: "users endpoint"
  })
})

// router.put('/', async (req, res) => {
//   const {username, password, passwordBaru} = req.body
//   const userData = await usersModel.findOne({where : {username:  username}})
//   if (userData === true) {
//     const user = await usersModel.update({
//       password: passwordBaru
//     }, {where: {username: username}})
//     res.json({
//       data: user,
//       metadata: "users endpoint"
//     })
//   }
//   res.json({
//     error: "data invalid"
//   })
// })

router.post('/login', async (req, res) => {
  const {username, password} = req.body
  res.json({
    data: {username, password},
    metadata: "login endpoint"
  })
})

module.exports = router