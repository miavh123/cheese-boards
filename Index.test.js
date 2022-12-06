const {sequelize,} = require('./db');
const {Board}=require('./Index.js');
const { User} = require('./Index.js');
const {Cheese}= require ('./Index.js')


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

// Read
 
})