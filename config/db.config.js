const Sequelize = require('sequelize');

module.exports = new Sequelize('test-db', 'test', 'zapp1234', {
    host: 'cryptozap.cnppnvrarmre.us-east-2.rds.amazonaws.com',
    dialect: 'postgres'
});
