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

  module.exports = {
  createBagel
}