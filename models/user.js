const Sequelize = require('sequelize');
const sequelise = require('../util/database');

const User = sequelise.define('User',{
id:{
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull: false,
    primaryKey: true
},
name:Sequelize.STRING,
phone:{
    type:Sequelize.STRING,
    allowNull:false
},
email:Sequelize.STRING
});

module.exports = User;