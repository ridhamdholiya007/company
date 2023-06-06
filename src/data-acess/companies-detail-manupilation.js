const table = 'companies';

//adding to the database
function makeaddCompanies({cockroach}){
    return async function addCompanies({name,location}){

        const result = await cockroach.query(`insert into ${table}(name,location)
        values('${name}','${location}') Returning id`);
        console.log(result);
        return result.rows;
    }
}

function makegetCompanies({cockroach}){
    return async function getCompanies({name}){
        
        const result = await cockroach.query(`select * from ${table} where name = '${name}'`);
        
        return result.rows;
    }
}

function makedeleteCompanies({cockroach}){
    return async function deleteCompanies({name}){
        const result = await cockroach.query(`delete from ${table} where name = '${name}'`);
       
        return result.rowCount;
    }
}

function makeupdateCompanies({cockroach}){
    return async function updateCompanies({name,newname}){
        const result = await cockroach.query(`update ${table} set (name) = ('${newname}') where name = '${name}'`);

        return result.rowCount;
    }
}

function makegetAllCompany({cockroach}){
    return async function getAllCompany(){
        const result = await cockroach.query(`select * from ${table}`);
      
        return result.rows;
    }
}


module.exports = {
    makeaddCompanies,
    makegetCompanies,
    makedeleteCompanies,
    makeupdateCompanies,
    makegetAllCompany
}