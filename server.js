const express = require('express')
const cors = require('cors')
require('dotenv').config()
const session = require('express-session');
const port = process.env.port

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log("database ready"))

const userEnpoind = require('./Routes/usersRoutes')
const blogEnpoind = require('./Routes/blogRoutes')

const app = express()
app.use(cors())
app.use(express.json())
// Setup session middleware
app.use(session({
  secret: 'a7V8N9lMfQ2X0hZrT4W6sJ5xG1L3uK8o',  // Ganti dengan secret yang aman
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }    // Set 'true' jika menggunakan HTTPS
}));

app.use('/users', userEnpoind)
app.use('/blog', blogEnpoind)

app.listen(port, () => { console.log(`server runing to port ${port}`)})