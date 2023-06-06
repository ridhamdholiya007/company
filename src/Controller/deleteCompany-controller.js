module.exports = function makedeleteCompanyController({Joi,deleteCompany,ValidationError}){
    return async (req,res)=>{
        try {
            let name = req.body.name;
            console.log('name');
            validInput({name});

            const result = deleteCompany({name});
    
            res.status(200).send('company deleted');        
        } catch (error) {
            console.log(error.message);
            res.status(404).json({
                status: 'error',
                error: error.message
            })
        }
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