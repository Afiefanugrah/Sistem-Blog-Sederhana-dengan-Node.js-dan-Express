const express = require('express')
const port = 3300

const userEnpoind = require('./Routes/usersRoutes')

const app = express()
app.use(express.json())

app.use('/', userEnpoind)

app.listen(port, () => { console.log(`server runing to port ${port}`)})