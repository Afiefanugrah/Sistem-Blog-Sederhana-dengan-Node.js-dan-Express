const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  res.json({
    data: "user data",
    metadata: "users endpoint"
  })
})

router.post('/', async (req, res) => {
  const {username, password} = req.body
  res.json({
    data: {username, password},
    metadata: "users endpoint"
  })
})

module.exports = router