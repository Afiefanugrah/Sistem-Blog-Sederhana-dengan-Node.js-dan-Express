const express = require('express')
const cors = require('cors')
const port = 3300



const userEnpoind = require('./Routes/usersRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', userEnpoind)

app.listen(port, () => { console.log(`server runing to port ${port}`)})