const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.port

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log("database ready"))

const userEnpoind = require('./Routes/usersRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', userEnpoind)

app.listen(port, () => { console.log(`server runing to port ${port}`)})