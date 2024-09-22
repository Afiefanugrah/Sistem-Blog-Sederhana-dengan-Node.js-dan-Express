const express = require('express')
const port = 3300

const app = express()


app.listen(port, () => { console.log(`server runing to port ${port}`)})