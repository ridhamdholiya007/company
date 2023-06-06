const assert = require("assert");
const Joi = require("joi");
const { Given, When, Then, And } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect
const sandbox = sinon.createSandbox();
const exceptions = require('../exceptions/index');
const userdb = {
  deleteCompany: () => {},
  getCompany: ()=>{},
  deleteEmployees: ()=>{}
 
};
const makedeletecompany = require("./deleteCompany-usecase");

const deleteCompanyStub = sandbox.stub(userdb,"deleteCompany");
deleteCompanyStub.callsFake(({name})=>{
  expect([name]);

  return '1';
});


Given(
    'User details name: {string} to Delete company',
    (name) => {
      this.name = name || undefined;
    }
  );
  
  When('Try to Delete company', async () => {
    try {
      const deletecompany =  makedeletecompany({ Joi, 
        deleteCompany:userdb.deleteCompany,
        getCompany:userdb.getCompany,
        deleteEmployees:userdb.deleteEmployees,
        ValidationError:exceptions.ValidationError
      });
  
      this.result = await deletecompany({ name: this.name});
    } catch (e) {
      console.log(e);
      this.result = e;
    }
  });
  
  Then('It will throw error with message: "{string}" while Deleting company', (message) => {
    console.log("===========================", message)
    console.log("heyit",this.result.message);
    assert.equal(this.result.message, message);
  });
  
  Then('It will give rowcount: {string}', (newUserdetail) => 
  {
     console.log("-=-=-=-=-=-=-=-=-=-=-=-=", this.result); 
     assert.deepEqual(this.result, newUserdetail); 
    });
  
  
  Then('deletecompany function will call {int}  times', (count) => {
      sinon.assert.callCount(deleteCompanyStub, count)
    });

