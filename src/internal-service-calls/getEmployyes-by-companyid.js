module.exports = function makegetEmployees({fetch,config}){
    return async function getEmployees({companyId}){ 

      

      const getEmployeeEndpoint = `${config.employeeConfig}getemployees?id=${companyId}`;

      let response = await fetch(getEmployeeEndpoint);
 
      response = await response.json();
    
      return response;
      
    }
}