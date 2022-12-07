const { Board } = require('./models/Board')
const { User } = require('./models/User')
const { Cheese }= require('./models/Cheese')

User.hasMany (Board)
Board.belongsToMany(Cheese)
Board.belongsToMany(Cheese, { through:'cheese_boards'})
Cheese.belongsToMany(Board,  { through: 'cheese_boards'})

module.exports = {Board,Cheese,User};