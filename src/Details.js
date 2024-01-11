import TextToSpeech from './TextToSpeech';

const  Details= () => {
  const text =`Product Name: Crunchy Oat 
  Ingredients List: Whole oats, sugar, corn syrup, oat flour, honey, salt, natural flavor, 
  vitamins and minerals (calcium carbonate, vitamin C, iron, vitamin D, niacinamide, vitamin B6, 
    riboflavin, folic acid). Nutrition Facts (per 1 cup serving): Calories: 120 Total Fat: 1g Saturated 
    Fat: 0g Trans Fat: 0g Cholesterol: 0mg Sodium: 160mg Total Carbohydrates: 26g Dietary Fiber: 2g 
    Sugars: 9g Protein: 2g Allergen Information: Contains oats. 
    May contain traces of nuts. Net Weight: 350g Expires on 12/31/2024 
    Storage Instructions: Store in a cool, dry place. 
    Country of Origin: Made in the India Contact Information: 
    Customer Service: 1-800-123-4567,
     www.examplecereal.com Sustainability and Environmental Information: 
     Our packaging is made from 100% recyclable materials. `
  return (
    <div>
      <h1>Proucts id : 123</h1>
      <TextToSpeech text={text} />
      <p>{text}</p>
    </div>
  );
};

export default Details;