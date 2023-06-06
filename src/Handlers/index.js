const {Kafka} = require('kafkajs');
const servicecalls = require('../internal-service-calls/index');

const kafka = new Kafka({
    clientId: 'company-app',
    brokers: ['localhost:9092']
  });

const makegetcompanyIdHandler = require('./delete-employee-handler');
const getcompanyIdHandler = makegetcompanyIdHandler({kafka,deleteEmployees:servicecalls.deleteEmployees});

getcompanyIdHandler();