const express = require('express')
const port = 3300

const userEnpoind = require('./Routes/users')

const app = express()

app.use('/', userEnpoind)

app.listen(port, () => { console.log(`server runing to port ${port}`)})