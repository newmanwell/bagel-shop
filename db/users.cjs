const client = require('./client.cjs');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createUser = async (username, password) => {
  try {
    const { rows } = await client.query(`
  INSERT INTO users (username, password)
  VALUES ('${username}', '${password}');
    `)
    const user = rows;
    return user;
  } catch (err) {
    console.log(err);
  }
}


const logInUser = async(username, password) => {
  try {

    const { rows } = await client.query(`
      SELECT * FROM users WHERE username='${username}'
      `);
      
      const user = rows[0];
    
      if(user) {
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
          const token = await jwt.sign({username:user.username}, process.env.JWT_SECRET);
          
          return token;
        } else {
          throw new Error (`Bad Credentials`);
        }
      } else {
        return { message: 'Bad Token' }
      }
    } catch(err) {
      throw err;
  }
}


const registerUser = async(username, password) => {
  try{

    const {rows: user} = await client.query(`
      SELECT * FROM users 
      WHERE username='${username}'  
    `);
  
    if (user.length > 0){
      throw Error(`User Already Exists!`);
    } else {
    const encryptedPassword = await bcrypt.hash(password,10);
    const newUser = await createUser(username, encryptedPassword);
    const token = await jwt.sign({username:newUser.username}, process.env.JWT_SECRET);

    return { message: "User registered successfully!", token };
    }
  } catch(err) {
    console.log(err);
    throw new Error(`Bad Credentials`);
  }
}


module.exports = {
  createUser,
  logInUser,
  registerUser
}