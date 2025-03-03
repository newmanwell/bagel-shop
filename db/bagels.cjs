const client = require('./client.cjs');

const createBagel = async(bagelName, bagelDescription, bagelImage, bagelPrice) => {
  try {
    const { rows } = await client.query(`
    INSERT INTO bagels (name, description, image, price)
    VALUES ( '${bagelName}', '${bagelDescription}', '${bagelImage}', '${bagelPrice}');
      `)
    const product = rows
    return product;
  } catch (err) {
    console.log(err);
  }
};


const fetchAllBagels = async() => {
  try{
    const { rows: retrievedBagels } = await client.query(`
      SELECT * FROM bagels;
    `);

    return retrievedBagels;
  } catch(err) {
    console.log(err);
  }
};

const fetchBagelDetails = async(bagel_id) => {
  try {
    const { rows: retrievedBagelDetails } = await client.query(`
      SELECT * FROM bagels WHERE id = ${bagel_id};
    `);

    return retrievedBagelDetails;
  } catch(err) {
    console.log(err);
  }
}

  module.exports = {
  createBagel,
  fetchAllBagels,
  fetchBagelDetails
}