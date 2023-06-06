const assert = require("assert");
const Joi = require("joi");
const { Given, When, Then, And } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect
const sandbox = sinon.createSandbox();
const exceptions = require('../exceptions/index');
const userdb = {
    getCompany: () => {},
    getEmployees: () => {}
};

const makegetcompany = require('./getComapny-usecase');

const getCompanyStub = sandbox.stub(userdb,"getCompany");
getCompanyStub.callsFake(()=>{
  

  return [{name:'google',location:'usa'}];
});

const getEmployeesStub = sandbox.stub(userdb,"getEmployees");
getEmployeesStub.callsFake(()=>{
  
});

Given(
  'User details name: {string} , newname: {string} to Delete company',
  (name,newname) => {
    this.name = name || undefined;
    this.newname = newname || undefined; 
  }
);

When('Try to update company', async () => {
  try {
    const deletecompany =  makeupdatecompany({ 
      Joi, 
      updateCompanyName:userdb.updateCompanyName,
      ValidationError:exceptions.ValidationError
    });

    this.result = await deletecompany({ name: this.name , newname:this.newname});
  } catch (e) {
    console.log(e);
    this.result = e;
  }
});

Then('It will throw error with message: "{string}" while updating company', (message) => {
  console.log("===========================", message)
  console.log("heyit",this.result.message);
  assert.equal(this.result.message, message);
});

Then('It will give updated rowcount: {string}', (newUserdetail) => 
{
   console.log("-=-=-=-=-=-=-=-=-=-=-=-=", this.result); 
   assert.deepEqual(this.result, newUserdetail); 
  });


Then('updatecompany function will call {int}  times', (count) => {
    sinon.assert.callCount(updateCompanyStub, count)
  });

