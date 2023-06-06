module.exports = function makedeleteEmployees({fetch,config}){
    return async function deleteEmployees({companyId}){ 
   
        const deleteEndpoint = `${config.employeeConfig}deletemployees?id=${companyId}`;
        
        const response = await fetch(deleteEndpoint, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },     
          });
        return response;
    }
}