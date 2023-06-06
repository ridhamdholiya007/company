'use strict';
const  { Sequelize} = require('sequelize');

module.exports = {
async  up({context:queryInterface}) {
    await queryInterface.sequelize.query(
      `CREATE TABLE companies (
        id UUID NOT NULL DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        CONSTRAINT companies_pkey PRIMARY KEY (id ASC),
        UNIQUE INDEX users_email_key (email ASC),
        UNIQUE INDEX companies_name_key (name ASC)
      )`
    );
  },
  async down({context:queryInterface}) {
    await queryInterface.dropTable('companies');
  }
};
