module.exports = function makecompanyEntity({Joi,ValidationError}){
    return function companyTable({ name,location}){
        const schema=Joi.object({
           
            name:Joi.string().min(2).allow(""),
            location:Joi.string().min(2).allow(""),
         
        });

        const {value,error}= schema.validate({
           name,
           location
        });
        if (error) {
            throw new ValidationError(error.message);
          }

          return Object.freeze({
            name:value.name,
            location:value.location,
            
        });  
    }
}