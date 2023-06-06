module.exports = function makegetAllCompanyController({getAllCompany}){
    return async (req,res)=>{
        try {
            const result = await getAllCompany();

            res.send(result);      
        } catch (error) {
            console.log(error.message);
            res.status(404).json({
                status: 'error',
                error: error.message
            })
        }
    }
}