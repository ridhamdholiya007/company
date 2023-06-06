module.exports = function makeaddCompanyUsecase({Joi,addCompany,companyTable,ValidationError}){
    return async function addCompanyUsecase({name,location}){
        //validating
        validInput({name,location});
        
        //checking for each entity for table
        let data = companyTable({name,location});

        //adding to te table
        const result = await addCompany({name:data.name,location:data.location});

        return result;
    }

    function validInput(input) {
        const schema = Joi.object({
            name: Joi.string().trim().required().min(2),
            location: Joi.string().trim().required(),
        });
 
        const { error, value } = schema.validate(input)
        if (error) throw new ValidationError(error.message)
        return value;
    }
}