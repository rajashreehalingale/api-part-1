
const colleges = require('../college')

const getAllColleges = (request, response) => {
  const collegedata = colleges
  return response.render('index',{colleges, collegedata })
}

const getCollegesByCity = (request, response) => {
  const { city } = request.params
  const collegedata = colleges.filter(college => college.city === city)
 
   return response.render('index', {colleges, collegedata })
}

const getCollegesByID = (request, response) => {

  const detaildata = colleges.filter(college => college.id === parseInt(request.params.id))
  return response.render('details', {detaildata})
}

module.exports = {
  getAllColleges,
  getCollegesByCity,
  getCollegesByID
}
