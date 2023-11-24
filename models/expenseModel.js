const Sequelize = require('sequelize');
const sequelise = require('../util/database');

const Expense = sequelise.define('Expense',{
id:{
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull: false,
    primaryKey: true
},
amount:{
    type:Sequelize.INTEGER,
    allowNull:true
},
description:Sequelize.STRING,
category: Sequelize.STRING
});

module.exports = Expense;