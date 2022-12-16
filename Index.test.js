const {sequelize} = require('./db');
const {Board,User,Cheese} = require('./index');

describe ('Board Cheese User models',() => {
    beforeAll(async ()=>{
        await sequelize.sync({force:true});
    })


// CREATE

test('Creating Board',async ()=>{
    const board = await Board.create({
         type:'Yummm', 
         description: 'Cool decorations', 
         ratings: 8 })
   
   expect(board).toBeDefined()
   expect(board.type).toEqual('Yummm')
})
 test( 'Creating Cheese', async()=>{
     const cheese = await Cheese.create({
        title: 'Mia Cheese',
        description: 'Choose your favorite cheese'})
    
       expect(cheese).toBeDefined()
       expect(cheese.title).toBe('Mia Cheese')


 })
 test('Creating User',async () => {
    const user = await User.create({
     name:"Jane", 
     email:"janesmitten@gmail.com"})
     expect (user).toBeDefined()
     expect(user.email).toBe('janesmitten@gmail.com')
 })

 //testing associations


 test('Multiple boards can be added to a User',async() =>{
        await sequelize.sync({force: true})
  const newUser = await User.create({ 
    name: 'Nia', email:'Nia232@gmail.com'});
 const board1 = await Board.create({
    type:'All around italy', description:'A taste of Italy',ratings:10});
 const board2 = await Board.create({
     type:'Yummm', description: 'Cool decorations', ratings: 8 });
        await newUser.addBoards([board1,board2]);
        const newUserBoard = await newUser.getBoards();
        expect(newUserBoard.length).toBe(2);
        expect(newUser[0] instanceof Board).toBeTruthy;
 })
 test('A Board can have many Cheeses vice versa', async()=>{
     await sequelize.sync({force: true})
 const board1 = await Board.create({
    type:'All around italy', description:'A taste of Italy',ratings:10});
 const board2 = await Board.create({ 
    type:'Yummm', description: 'Cool decorations', ratings: 8 });
 const cheese1 = await Cheese.create({
    title: 'Mia Cheese',description: 'Choose your favorite cheeses'}) ;
 const cheese2 = await Cheese.create({
    title:'Mozz Delight', description:'Mozzerlla Lovers'});
   await board1.addCheese([cheese1,cheese2]);
    const board1Cheese = await board1.getCheeses();
  expect(board1Cheese.length).toBe(2)

    await board2.addCheese(cheese1);
     const cheese1Boards = await cheese1.getBoards();
     expect (board1Cheese.length).toBe(2)
     const cheese2Boards = await cheese2.getBoards();
     expect (cheese2Boards.length).toBe(1)

 })
test('testing loading with eager', async () =>{
})
})