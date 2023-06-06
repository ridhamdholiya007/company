module.exports = function makeupdateCompanyUseCase({Joi,updateCompanyName,ValidationError,NoDataFoundError}){
  return async function updateCompanyUseCase({name,newname}){
    //validating the data
    validInput({name,newname});
  
    //calling the data-acess function
    const result = await updateCompanyName({name,newname});

    if(result==0) throw new NoDataFoundError('no data found to update!');

    return result;
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