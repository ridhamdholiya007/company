const assert = require("assert");
const Joi = require("joi");
const { Given, When, Then, And } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect
const sandbox = sinon.createSandbox();
const exceptions = require('../exceptions/index');
const userdb = {
    updateCompanyName:()=>{}
};

const makeupdatecompany = require('./updateCompany-name-usecase');

const updateCompanyStub = sandbox.stub(userdb,"updateCompanyName");
updateCompanyStub.callsFake(({name,newname})=>{
    expect([name,newname]);
  
    return 1;
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
