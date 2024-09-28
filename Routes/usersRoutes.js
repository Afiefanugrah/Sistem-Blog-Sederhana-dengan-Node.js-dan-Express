const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
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
  const passwordBcrypt = await bcrypt.hash(password, 10)
  const user = await usersModel.create({
    username, password: passwordBcrypt
  })
  res.status(201).json({
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
  const userData = await usersModel.findOne({where: {username: username}})
  const passCompare = await bcrypt.compare(password, userData.password)
  // res.json(passCompare)
  if(passCompare === true) {
    req.session.user = {
      id: userData.id,
      username: userData.username
    }
    res.json({
      data: userData,
      metadata: "login endpoint"
    })
  } else {
    res.json({
      error: "data invalid"
    })
  }
})

module.exports = router