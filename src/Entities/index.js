const Joi = require('joi');
const exceptions = require('../exceptions/index');

const makecompanyTableEntity = require('./company-table-entitiy');
const companyTable = makecompanyTableEntity({Joi,ValidationError:exceptions.ValidationError});

module.exports = {
    companyTable
}