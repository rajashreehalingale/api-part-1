const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { before, afterEach, describe, it } = require('mocha')
const models = require('../../models')
const { collegeList, singleCollege } = require('../mocks/college')
const colleges = require('../mocks/college')

const { getSQLAllColleges, getSQLCollegesByCity, getSQLCollegesByID } = require('../../Controllers/mSqlCollegeController')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - colleges', () => {
 let stubbedFindAll

 before(() => {
  stubbedFindAll = sinon.stub(models.Colleges, 'findAll')
 })

 afterEach(() => {
  stubbedFindAll.resetBehavior()
 })

 after(function () {
  models.Colleges.findAll.reset(); // Unwraps the spy
 })

 describe('getSQLAllColleges', () => {
  it('should return a list of all colleges', async () => {

   // const stubbedFindAll = sinon.stub(models.Colleges, 'findAll').returns(collegeList)
   stubbedFindAll.returns(collegeList)
   const stubbedRender = sinon.stub()
   const response = { render: stubbedRender }

   await getSQLAllColleges({}, response)


   expect(stubbedRender).to.have.been.calledWithMatch('index', { collegedata: collegeList, colleges: collegeList })
  })
 })
 describe('getSQLCollegesByCity', () => {
  it('should return a list of all colleges in selected city', async () => {

   const request = { params: { city: 'Wellesley Hills' } }
   // const stubbedFindAll = sinon.stub(models.Colleges, 'findAll').returns(collegeList)
   stubbedFindAll.returns(collegeList)
   const stubbedRender = sinon.stub()
   const response = { render: stubbedRender }

   await getSQLCollegesByCity(request, response)

   expect(stubbedFindAll).to.have.been.calledWith({ where: { city: 'Wellesley Hills' } })
   expect(stubbedRender).to.have.been.calledWith('index', { collegedata: collegeList, colleges: collegeList })
  })
 })


 it('should not find a college', async () => {
  const request = { params: { city: 'not found' } }
  stubbedFindAll.returns(collegeList)
  const stubbedRender = sinon.stub()
  const response = { render: stubbedRender }

  await getSQLCollegesByCity(request, response)

  expect(stubbedFindAll).to.have.been.calledWith({ where: { city: 'not found' } })
  expect(stubbedRender).to.have.been.calledWithMatch('index', { collegedata: collegeList, colleges: collegeList })

 })

})