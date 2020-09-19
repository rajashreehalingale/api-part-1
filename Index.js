const express = require('express')
const colleges = require('./college')
const bodyparser = require('body-parser');
const { getAllColleges, getCollegesByCity, getCollegesByID } = require('./Controllers/collegeController')

const app = express()

app.use(express.static('Public'))
app.set('view engine', 'pug')

app.use(bodyparser.urlencoded({ extended: true }))


app.get('/index', getAllColleges)
app.get('/index/city/:city', getCollegesByCity)

app.get('/details/:id', getCollegesByID)

/* app.get('/', (request, response) => {
  //  return response.render('Index', { collegedata })
  response.send("welcome to index page")
})

app.get('/index', (request, response) => {
  response.render('index', { colleges })
})

app.post('/', bodyparser.json(), (request, response) => {
  return response.status(400).send(request.body)
})

app.get('/submit-form-with-get', (request, response) => {
  response.render('index')
}) */

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 1337...')
})
