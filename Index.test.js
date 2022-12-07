const {sequelize,} = require('./db');
const {Board}=require('./models/Index.js');
const { User} = require('./models/Index.js');
const {Cheese}= require ('./models/Index.js')


describe ('Board Cheese User models',() => {
    beforeAll(async ()=>{
        await db.sync({force:true});
    })


// CREATE

test('Creating Board',async ()=>{
    const board = await Board.create({ type:'Yummm', description: 'Cool decorations', ratings: 8 });
   
    expect(board.type).toBe('Yumm')
    expect (board.description).toBe('Cool decorations')
    expect(board.ratings).tobe(8)
})
test( 'Creating Cheese', async()=>{
    const cheese = await Cheese.create({title: 'Mia Cheese',description: 'Choose your favorite cheese'})
    
    expect(cheese.title).toBe('Mias Cheese')
    expect(cheese.description).toBe('Choose your favorite cheese')

})
test('Creating User',async () => {
 const user = await User.create({name:"Jane", email:"janesmitten@gmail.com"})
 expext(user.name).toBe('Jane');
 expect(user.email).toBe('janesmitten@gmail.com');
})

// testing associations

describe('model associations')

test('Multiple boards can be added to a User',async() =>{
        await Sequelize.sync({force: true})
 const newUser = await User.create({ name: 'Nia', email:'Nia232@gmail.com'});
 const board1 = await Board.create({type:'All around italy', description:'A taste of Italy',ratings:10});
 const board2 = await Board.create({ type:'Yummm', description: 'Cool decorations', ratings: 8 });
        await newUser.multipleBoards([board1,board2]);
        expect(newUser.length).toBe(2);
        expect(newUser[0] instanceof Board).toBeTruthy;
})
test('A Board can have many Cheeses vice versa', async()=>{
        await Sequelize.sync({force: true})
 const board1 = await Board.create({type:'All around italy', description:'A taste of Italy',ratings:10});
 const board2 = await Board.create({ type:'Yummm', description: 'Cool decorations', ratings: 8 });
 const cheese1 = await Cheese.create({title: 'Mia Cheese',description: 'Choose your favorite cheeses'}) ;
 const cheese2 = await Cheese.create({title:'Mozz Delight', description:'Mozzerlla Lovers'});
    await board1.addCheese([cheese1,cheese2]);
    const board1Cheese = await board1.getcheese();
    expect(board1Cheese.length).toBe(2)

    await board2.addCheese([cheese1,cheese2]);
    const cheese1Board = await cheese1.getBoard();
    expect (board1Cheese.length).toBe(1)

})

})