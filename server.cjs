const{fetchAllBagels, fetchBagelDetails} = require('./db/bagels.cjs');

const express = require('express');
const app = express();

app.use(express.static('dist'));

const client = require('./db/client.cjs');
client.connect();

// get all bagel info
app.get('/api/bagels', async(req, res, next) => {
  try{
    const allBaegls = await fetchAllBagels();
    res.send(allBaegls);
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
