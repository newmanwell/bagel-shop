import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetOneBagel = () => {
  const { id } = useParams();
  const [ singleBagel, setSingleBagel ] = useState({});

  useEffect(() => {
    const oneBagelDetails = async() => {
      const response = await fetch(`/api/bagels/${id}`);
      const bagelArray = await response.json();
      const oneBagel = bagelArray[0];
      setSingleBagel(oneBagel);
    }
    oneBagelDetails();
  }, []);  
  console.log(singleBagel);

  return (
    <> 
        <section>
          <h2>{ singleBagel.name }</h2>
          <img src={ singleBagel.image } alt="A tasty Bagel"/>
          <p>{ singleBagel.description }</p>
          <h3>Price: ${ singleBagel.price / 100 }</h3>
        </section>
    </>
  )
}

export default GetOneBagel;