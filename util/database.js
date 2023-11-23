const Sequelise = require('sequelize');

const sequelize = new Sequelise('node-complete','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;