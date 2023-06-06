const express = require('express');
const app = express();
const router = require('./rest_services');
require('./migrate-postgre-database');

//middle-wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',router);


const port = 3000;
app.listen(port);
console.log(`app is listing on ${port}`);

