module.exports = function makedeleteEmployeeHandler({kafka,deleteEmployees}){
    return async function deleteEmployeeHandler(){
        const consumer = kafka.consumer({ groupId: 'test-group' });

        await consumer.connect()
        await consumer.subscribe({ topic: 'delete-employee-topic' });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                let companyId = message.value.toString();
                await deleteEmployees({companyId});
                
            }
        });
    }
}