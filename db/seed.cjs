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
  await createBagel('Plain', 'An plain bagel, nothing special', '/images/bagel_pictures/plain.webp', 100);
  await createBagel('Everything', 'Everything on the kitchen counter for this one', '/images/bagel_pictures/everything.jpg', 300);
  await createBagel('Rainbow', 'Taste the rainbow!, its just a plain bagel with color', '/images/bagel_pictures/rainbow.jpg', 400);
  await createBagel('Salt', 'Salty like the beach', '/images/bagel_pictures/salt.jpg', 200);
  await createBagel('Egg', 'Do not blame us for the price, eggs are pricey', '/images/bagel_pictures/egg.webp', 1000);
  await createBagel('Pumpernickel', 'Not a chocolate bagel', '/images/bagel_pictures/pumpernickel.webp', 200);
  await createBagel('Hot Cheetos', 'Oh she spicy', '/images/bagel_pictures/flaming-hot-bagel.jpg', 700);
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