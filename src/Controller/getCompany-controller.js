module.exports = function makegetCompanycontroller({Joi,getCompany,ValidationError}){
    return async (req,res)=>{
          try {
          
            let name = req.query.name;
            validInput({name});

            const result = await getCompany({name});


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
        });
 
        const { error, value } = schema.validate(input)
        if (error) throw new ValidationError(error.message);
        return value;
    }
}