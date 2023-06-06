module.exports = function makegetCompanyUseCase({Joi,getCompany,getEmployees,ValidationError,NoDataFoundError}){
    return async function getCompanyUseCase({name}){
        validInput({name});
        
        //getting the company id for getting info about the employee
        const result = await getCompany({name});
          
        if(result.length == 0 ) throw new NoDataFoundError('not data found!');

        let companyId = result[0].id;
       //calling the data-acess function for geting company detail
        let employeeData = await getEmployees({companyId});
        //employeeData = await employeeData.json();

        //adding company emloyee details
        let numberOfEmployee = employeeData.length;
        result[0]['Employees'] = numberOfEmployee;

        //adding data of employees
        let obj = {employees:employeeData};
        result.push(obj);
        
        return result;
    }

    function validInput(input) {
        const schema = Joi.object({
            name: Joi.string().trim().required().min(2),
        });
 
        const { error, value } = schema.validate(input)
        if (error) throw new ValidationError(error.message)
        return value;
    }
}