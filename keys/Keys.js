const Sequelize = require("sequelize");
const connection = require("../database/database");

const Keys = connection.define('keys',{
    nameSite:{
        type: Sequelize.STRING,
        allowNull: false
    },linkSite: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

// Keys.sync({force: false});

module.exports = Keys
