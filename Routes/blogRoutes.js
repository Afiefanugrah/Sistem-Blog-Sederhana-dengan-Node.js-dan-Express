const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const blogModel = require('../Models/blogModel')

router.get('/', async (req, res) => {
  res.json({
    data: "tes",
    metadata: "blog endpoint"
  })
})

router.post('/posts', async (req, res) => {
  const loggedInUser = req.session.user
  const { title ,content } = req.body
  if(!loggedInUser) {
    return res.status(401).json({ error: "seson invalid" });
  }
  const x = await blogModel.create({
    title, content, UserId: loggedInUser.id
  })
  res.json({
    data: "tes",
    metadata: "creat endpoint"
  })
})



module.exports = router