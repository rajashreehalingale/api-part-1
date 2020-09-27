const express = require('express')
const colleges = require('./college')
const bodyparser = require('body-parser');
//const { getAllColleges, getCollegesByCity, getCollegesByID } = require('./Controllers/collegeController')
const { getSQLAllColleges,
  getSQLCollegesByCity,
  getSQLCollegesByID } = require('./Controllers/mSqlCollegeController')

const app = express()

app.use(express.static('Public'))
app.set('view engine', 'pug')

app.use(bodyparser.urlencoded({ extended: true }))

// app.get('/index', getAllColleges)
app.get('/index', getSQLAllColleges)

// app.get('/index/city/:city', getCollegesByCity)
app.get('/index/city/:city', getSQLCollegesByCity)

app.get('/details/:id', getSQLCollegesByID)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 1337...')
})
