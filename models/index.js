const Sequelize = require('sequelize')
const collegemodel = require('./collegeModel')

const connection = new Sequelize('colleges', 'collegeAdmin', '$c0ll3g3$', {
  host: 'localhost', dialect: 'mysql'
})

const Colleges = collegemodel(connection, Sequelize)

module.exports = { Colleges } 
