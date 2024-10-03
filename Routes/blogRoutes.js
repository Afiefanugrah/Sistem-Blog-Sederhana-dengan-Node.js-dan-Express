const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const blogModel = require('../Models/blogModel')

router.get('/', async (req, res) => {
  const blogs = await blogModel.findAll()
  res.json({
    data: blogs,
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

router.put('/posts/:id', async (req, res) => {
  const {id} = req.params
  const blog = await blogModel.findByPk(id)
  const loggedInUser = req.session.user
  if(!loggedInUser) {
    return res.status(401).json({ error: "seson invalid" });
  }
  res.json(loggedInUser)
  if(blog) {
    res.json({
      data: blog,
      metadata: "blog by id endpoint"
    })
  } else{
    res.json({error: "data invalid"})
  }
})

// router.delete('/posts/:id', async (req, res) => {
//   const {id} = req.params
//   const blog = await blogModel.findByPk(id)
//   if(blog) {
//     res.json({
//       data: blog,
//       metadata: "blog by id endpoint"
//     })
//   } else{
//     res.json({error: "data invalid"})
//   }
// })


module.exports = router