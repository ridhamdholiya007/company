const assert = require("assert");
const Joi = require("joi");
const { Given, When, Then, And } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect
const sandbox = sinon.createSandbox();
const exceptions = require('../exceptions/index');
const userdb = {
  addCompany: () => {},
  companyTable: ()=>{}
};
const makeAddcompany = require("./addCompany-usecase");

const entityStub = sandbox.stub(userdb,"companyTable");
entityStub.callsFake(({name,location})=>{
  expect([name,location]);
  let data = {
    name,location
  }
  return data;
})

const addCompanyStub = sandbox.stub(userdb,"addCompany");
addCompanyStub.callsFake(({name,location})=>{
  expect([name,location]);

  return 'djkseu4w88fhd';
})


Given(
    'User details name: {string}, location:{string} to add company',
    (name,location) => {
      this.name = name || undefined;
      this.location = location || undefined;
   
    }
  );
  
  When('Try to add company', async () => {
    try {
      const addcompany =  makeAddcompany({ Joi, 
        addCompany:userdb.addCompany,
        companyTable:userdb.companyTable,
        ValidationError:exceptions.ValidationError
      });
  
      this.result = await addcompany({ name: this.name,location:this.location});
    } catch (e) {
      console.log(e);
      this.result = e;
    }
  });
  
  Then('It will throw error with message: "{string}" while adding company', (message) => {
    console.log("===========================", message)
    console.log("heyit",this.result.message);
    assert.equal(this.result.message, message);
  });
  
  Then('It will create new details: {string}', (newUserdetail) => 
{
   console.log("-=-=-=-=-=-=-=-=-=-=-=-=", this.result); 
   assert.deepEqual(this.result, newUserdetail); 
  });


Then('addcompany function will call {int}  times', (count) => {
    sinon.assert.callCount(addCompanyStub, count)
  });
  
