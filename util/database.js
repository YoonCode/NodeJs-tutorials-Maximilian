const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', '@Tkdwls0201', {
  dialect: 'mysql',
  host: 'localhost',
})

module.exports = sequelize
