const {Board} = require('./Board')
const {User} = require('./User')
const { Cheese }= require('./Cheese')

User.belongsTo (Board)
User.hasMany(Board)

Board.belongsToMany(Cheese, { through:'cheese_boards'})
Cheese.belongsToMany(Board,  { through: 'cheese_boards'})

module.exports = {Board,Cheese,User};