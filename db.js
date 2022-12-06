const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:path.join(_dirname,'./db.sqlite')
})


module.exports = {sequelize,Sequelize};