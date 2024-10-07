const bcrypt = require('bcrypt')
const usersModel = require('../Models/usersModel')

const passwordCheck = async ( username, password) => {
  const userData = await usersModel.findOne({where: {username: username}})
  const compare = await bcrypt.compare(password, userData.password)
  return {userData, compare}
}

module.exports = passwordCheck