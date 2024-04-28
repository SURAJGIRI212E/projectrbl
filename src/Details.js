import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TextToSpeech from './TextToSpeech';

const Details = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text, setText] = useState(''); // Declare text state variable
  const { productId } = useParams();

  useEffect(() => {
    // Fetch product data from the backend
    fetch(`${process.env.REACT_APP_BACKEND_URL}/products/api/foods/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  useEffect(() => {
    if (Object.keys(product).length > 0) { // Check if product is not empty
      const {
        product_id,
        name,
        brand,
        description,
        category,
        price,
        weight,
        ingredients,
        allergens,
        nutrition_facts,
        expiry_date,
        manufacture_date
      } = product;
      const nutritionFactsParagraph = Object.entries(nutrition_facts)
        .map(([key, value]) => `${key}: ${value},`)
        .join('\n');

      const allergensList = allergens.join(', ');

      const newText = `Product ID: ${product_id}, 
        Product Name: ${name},
        Brand: ${brand},
        Description: ${description}
        Category: ${category}, 
        Price is rupees ${price},
        Weight ${weight},
        Ingredients contains ${ingredients.join(', ')}.
        ${allergens.length === 0 ? "Non allergens" : `Allergens: Contains ${allergensList}`}. 
        Nutrition Facts:  ${nutritionFactsParagraph}.
        Manufacture Date: ${manufacture_date},
        Expiry Date: ${expiry_date}.
        Thank you..`;

        setText(newText)
    
    }
  }, [product,text]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
   return ( <>
   <h1>Sorry, not found</h1>
   <TextToSpeech text={"Product not found or link broken"} />
   </>)

  }

  return (
    <div>
      <h1>Product ID: {product?.product_id}</h1>
      
      <TextToSpeech text={text} />
      <p>{text}</p>
    </div>
  );
};

export default Details;
