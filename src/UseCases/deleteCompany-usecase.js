module.exports = function makedeleteCompanyUsecase({
    Joi,
    deleteCompany,
    getCompany,
    deleteEmployees,
    ValidationError,
    NoDataFoundError
}){
    return async function deleteCompanyUsecase({name}){
        validInput({name});

        //getting the company id for deletiung the employees
        let data = await getCompany({name});
        let companyId = data[0].id;
     
        //internal service call for deleting empployees
       await deleteEmployees({companyId});
        
        //deleting employees
        const result = await deleteCompany({name});

       if(result==0) throw new NoDataFoundError('data not found!');

        return result;
    }


    function validInput(input) {
        const schema = Joi.object({
            name: Joi.string().trim().required().min(2),
        });
 
        const { error, value } = schema.validate(input)
        if (error) throw new ValidationError(error.message);
        return value;
    }
} 