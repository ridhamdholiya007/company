module.exports = function makegetAllCompanyUseCase({getAllCompany,getCompany,NoDataFoundError}){
    return async function getAllCompanyUseCase(){

      //getting all company for fetching the emplloyee data
        let data = await getAllCompany();
        
        let allCompanydata = await getAllCompanyData({data});
       
        
       //throwing error if not data found from database
       if(allCompanydata.length==0) throw new NoDataFoundError('data not found!');
 
        return allCompanydata;
    }

    async function getAllCompanyData({data}){
      let allCompanydata = [];
      for(company of data){
        let name = company.name;
        let companyData = await getCompany({name});
        let obj = {[name]:companyData};
        allCompanydata.push(obj);
      }
      return allCompanydata;
    }
}