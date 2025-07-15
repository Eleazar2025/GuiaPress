const Sequelize = require("sequelize");
const connection = require("../database/database");

const Keys = connection.define('keys', {
    nameSite:{
        type: Sequelize.STRING,
        allowNull: false
    },linkSite:{
        type: Sequelize.STRING,
        allowNull: true
    },userName:{
        type: Sequelize.STRING,
        allowNull: true
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },email:{
        type: Sequelize.STRING,
        allowNull: false
    },senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Keys.sync({force: true});

module.exports = Keys;