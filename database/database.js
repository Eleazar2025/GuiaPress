const Sequelize = require("sequelize");
//criando um objeto de conexão
const connection = new Sequelize('guiapress2', 'root', 'Jesus2025*',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;