const {sequelize,Sequelize} = require('./db');


const Board = sequelize.define('board',{
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.STRING

})

module.exports = {Board};