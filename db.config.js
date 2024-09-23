const {sequelize} = require('sequelize')

const sequelize = new sequelize('', '', '', {
  host: '',
  dialect: ''
})

module.exports = sequelize