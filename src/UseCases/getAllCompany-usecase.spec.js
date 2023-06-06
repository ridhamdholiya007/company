const assert = require("assert");
const Joi = require("joi");
const { Given, When, Then, And } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect
const sandbox = sinon.createSandbox();
const exceptions = require('../exceptions/index');
const userdb = {
    getAllCompany:()=>{},
    getAllCompanyData:()=>{},
    getCompany:()=>{}
};

const makegetAllCompany = require('./getAllCompany-usecase');

const getAllCompanyStub = sandbox.stub(userdb,"getAllCompany");
getAllCompanyStub.callsFake(()=>{
  

  return [{name:'google',location:'usa'},{name:'rapidops',location:'ahemdabad'}];
});

const getAllCompanyDataStub = sandbox.stub(userdb,"getAllCompanyData");
getAllCompanyDataStub.callsFake(({})=>{
  

  return [{name:'google',location:'usa'},{name:'rapidops',location:'ahemdabad'}];
});

const getCompanyDetailStub = sandbox.stub(userdb,"getCompany");
getCompanyDetailStub.callsFake(()=>{

});

Given(
  'User details needed to get allcompany',
  () => {
 
  }
);

When('Try to get allcompany', async () => {
  try {
    const getAllcompany =  makegetAllCompany({ Joi, 
      getAllCompany:userdb.getAllCompany,
      getCompany:userdb.getCompany,
      ValidationError:exceptions.ValidationError
    });

    this.result = await getAllcompany();
  } catch (e) {
    console.log(e);
    this.result = e;
  }
});

Then('It will give details: "{string}"', (companydetail) => 
{
   console.log("-=-=-=-=-=-=-=-=-=-=-=-=", this.result); 
   assert.deepEqual(this.result,JSON.parse(companydetail)); 
  });


Then('getallcompany function will call {int}  times', (count) => {
    sinon.assert.callCount(getAllCompanyStub, count)
  });
  