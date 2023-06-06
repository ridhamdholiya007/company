module.exports = function makeupdateCompanyNameController({Joi,updateCompanyName,ValidationError}){
    return async (req,res)=>{
        try {
            let name = req.body.name;
            let newname = req.body.newname;
           
            validInput({name,newname});
            console.log('calling');
            const result = await updateCompanyName({name,newname});

            res.send(result); 
        } catch (error) {
            console.log(error.message);
            res.json({
                status: 'error',
                error: error.message
            })
        }

        function validInput(input) {
            const schema = Joi.object({
                name: Joi.string().trim().required().min(2),
                newname: Joi.string().trim().required().min(2),
            });
        
            const { error, value } = schema.validate(input)
            if (error) throw new ValidationError(error.message);
            return value;
    }
   }

}