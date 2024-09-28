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
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});


app.use('/users', userEnpoind)

app.listen(port, () => { console.log(`server runing to port ${port}`)})