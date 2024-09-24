const { Model, DataTypes  } = require('sequelize')
const sequelize = require('../db.config')

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "User"
})

module.exports = User