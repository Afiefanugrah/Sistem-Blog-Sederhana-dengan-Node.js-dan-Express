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
  secret: 'your-secret-key',  // Ganti dengan secret yang aman
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }    // Set 'true' jika menggunakan HTTPS
}));
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/register.html');
// });


app.use('/users', userEnpoind)
app.use('/blog', blogEnpoind)

app.listen(port, () => { console.log(`server runing to port ${port}`)})