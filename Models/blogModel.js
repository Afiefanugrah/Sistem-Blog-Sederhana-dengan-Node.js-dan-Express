const { Model, DataTypes  } = require('sequelize')
const sequelize = require('../db.config')
const User = require('./usersModel');

class Blog extends Model {}

Blog.init({
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  },
  UserId: {  // Sequelize convention: Foreign keys are often named this way
    type: DataTypes.INTEGER,
    references: {
      model: User, // Referensi ke model User
      key: 'id'    // Primary key dari model User
    }
  }
}, {
  sequelize,
  modelName: "Blog"
})

User.hasMany(Blog, { foreignKey: 'UserId' });
Blog.belongsTo(User, { foreignKey: 'UserId' });

module.exports = Blog