const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const usersModel = require('../Models/usersModel')
const passwordCheck = require('../utils/passswordCheck')

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
  if(passCompare === true) {
    req.session.user = {
      id: userData.id,
      username: userData.username
    }
    req.session.cookie
    res.json({
      data: userData,
      metadata: "endpoint login"
    })
  } else {
    res.json({
      error: "data invalid"
    })
  }
})


router.get('/session-info', (req, res) => {
  // Menampilkan informasi sesi
  res.send(`Sesi User: ${req.session.user.username || 'Tidak ada sesi'}`);
});


module.exports = router