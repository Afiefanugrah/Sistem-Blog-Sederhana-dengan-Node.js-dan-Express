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

router.get('/', async (req, res) => {
  res.json({
    data: "tes",
    metadata: "blog endpoint"
  })
})



module.exports = router