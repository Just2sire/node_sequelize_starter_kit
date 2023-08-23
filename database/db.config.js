const { Sequelize } = require("sequelize");

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_TYPE } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, '', {
    host: DB_HOST,
    dialect: DB_TYPE
});


module.exports = sequelize;