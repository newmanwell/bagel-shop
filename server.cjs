const{fetchAllBagels, fetchBagelDetails} = require('./db/bagels.cjs');
const{logInUser, registerUser} = require('./db/users.cjs');

const express = require('express');
const app = express();
app.use(express.json()); 

app.use(express.static('dist')); 

const client = require('./db/client.cjs');
client.connect();


// get all bagel info
app.get('/api/bagels', async(req, res, next) => {
  try{
    const allBagels = await fetchAllBagels();
    res.send(allBagels);
  } catch(err) {
    next(err);
  }
}); 


// get certain bagel details
app.get('/api/bagels/:bagel_id', async(req, res, next) => {
  const {bagel_id} = req.params;
  try{
    const bagelDetails = await fetchBagelDetails(bagel_id);
    res.send(bagelDetails);
  } catch(err) {
    next(err);
  }
});


// register
app.post('/api/register',async(req, res, next) => {
  const{username, password} = req.body;
  try {
    const regUser = await registerUser(username, password);
    res.send(regUser);
  } catch (err) {
    res.send({message: `Bad Credentials`});
  }
});


// login
app.post('/api/login',async(req, res, next) => {
  const{username, password} = req.body;
  try {
    const userToken = await logInUser(username, password);
    res.send({userToken})
  } catch (err) {
    res.send({message: err.message});
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
