const { Board } = require('./Board')
const { User } = require('./User')
const { Cheese }= require('./Cheese')

User.hasMany (Board)
Board.belongsToMany(Cheese)
Board.belongsToMany(Cheese, { through:'cheese_boards'})
Board.belongsToMany(Board,  { through: 'cheese_boards'})

module.exports = {Board,Cheese,User};