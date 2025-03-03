const client = require('./client.cjs');
const { createBagel } = require('./bagels.cjs');
const { createUser } = require('./users.cjs');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS bagels;
    `);
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(30) NOT NULL UNIQUE,
        password VARCHAR(60) NOT NULL
      );

       CREATE TABLE bagels (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL UNIQUE,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        price DECIMAL  NOT NULL
      );
    `);
  } catch(err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED TO THE DB');

  console.log('DROPPING TABLES');
  await dropTables();
  console.log('TABLES DROPPED');

  console.log('CREATING TABLES');
  await createTables();
  console.log('TABLES CREATED');

  console.log('CREATING BAGELS');
  await createBagel('Plain', 'An plain bagel, nothing special', 'https://images.squarespace-cdn.com/content/v1/5f0f608ea6738737b62790c1/1595773894105-58D723XLC7M6SGMCS5ML/Studio+Session-024.jpg', 100);
  await createBagel('Everything', 'Everything on the kitchen counter for this one', 'https://chefsavvy.com/wp-content/uploads/homemade-everything-bagels1.jpg', 300);
  await createBagel('Rainbow', 'Taste the rainbow!, its just a plain bagel with color', 'https://www.tastingtable.com/img/gallery/rainbow-bagel-secrets-viral-food-unicorn-trend/image-import.jpg', 400);
  await createBagel('Salt', 'Salty like the beach', 'https://www.frontrangefed.com/wp-content/uploads/2023/07/Salt-Bages-Featured-480x270.jpg', 200);
  await createBagel('Egg', 'Do not blame us for the price, eggs are pricey', 'https://static1.squarespace.com/static/5eac4cadbad0a7612d8c693a/t/60329318ce4285406cf12f3c/1613927204984/IMG_0225+2.jpg?format=1500w', 1000);
  await createBagel('Pumpernickel', 'Not a chocolate bagel', 'https://bagelsncreamnj.com/wp-content/uploads/2019/12/pumpernickel-rye-bagel-scaled.jpg', 200);
  await createBagel('Hot Cheetos', 'Oh she spicy', 'https://assets.westchestermagazine.com/wp-content/uploads/2023/10/flaming-hot-bagel.jpg', 700);
  console.log(' BAGELS CREATED');

  console.log('CREATING USERS');
  await createUser('John', '1234');
  await createUser('Ryan', 'abcd');
  await createUser('Stephanie', 'hello1');
  await createUser('Ashley', 'work123');
  await createUser('Matt', 'ilovebagels');
  console.log('USERS CREATED');

  await client.end();
  console.log('DISCONNECTED FROM THE DB');
}

syncAndSeed();