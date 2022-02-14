import React from "react";
import "./BarStools.css";
import BarStool from "../BarStool/BarStool";
const BarStools = (drinks) => {
  console.log(drinks, "drinks barstools");
  return (
    <div className="barStoolContainer">
      {drinks?.drinks?.data?.drinks?.map((drink, i) => (
        <BarStool
          key={drink.idDrink}
          id={drink.idDrink}
          drinkname={drink.strDrink}
          img={drink.strDrinkThumb}
          category={drink.strCategory}
          alc={drink.strAlcoholic}
          glass={drink.strGlass}
          instructions={drink.strInstructions}
          ingredients={[
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15,
          ].filter((l) => l !== null)}
          measures={[
            drink.strMeasure1,
            drink.strMeasure2,
            drink.strMeasure3,
            drink.strMeasure4,
            drink.strMeasure5,
            drink.strMeasure6,
            drink.strMeasure7,
            drink.strMeasure8,
            drink.strMeasure9,
            drink.strMeasure10,
            drink.strMeasure11,
            drink.strMeasure12,
            drink.strMeasure13,
            drink.strMeasure14,
            drink.strMeasure15,
          ].filter((l) => l !== null)}
        />
      ))}
    </div>
  );
};

export default BarStools;
