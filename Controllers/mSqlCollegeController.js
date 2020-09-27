const models = require('../models')

const colleges = require('../college')

const getSQLAllColleges = async (request, response) => {
  const collegedata = await models.Colleges.findAll()
  return response.render('index', { colleges, collegedata })
}

const getSQLCollegesByCity = async (request, response) => {
  const { city } = request.params
  const collegedata = await models.Colleges.findAll({
    where: { city: city }
  })

  return response.render('index', { colleges, collegedata })
}
const getSQLCollegesByID = async (request, response) => {

  const detaildata = await models.Colleges.findAll({
    where: { ID: parseInt(request.params.id) }
  })

  return response.render('details', { detaildata })
}

module.exports = {
  getSQLAllColleges,
  getSQLCollegesByCity,
  getSQLCollegesByID
} 