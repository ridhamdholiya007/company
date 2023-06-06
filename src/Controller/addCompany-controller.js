module.exports = function makeaddCompanyController({Joi,addCompany,ValidationError}){
    return async (req,res)=>{
          try {
            let name = req.body.name;
            let location = req.body.location;
    
            validInput({name,location});
    
            const result = await addCompany({name,location});
    
            res.status(200).send(result);

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
            location: Joi.string().trim().required(),
        });
 
        const { error, value } = schema.validate(input)
        if (error){
          throw new ValidationError(error.message);
        }
           
      return value;
     
    }
}