import React, { useState, useEffect, useContext } from "react";
import "./BarStool.css";
import { getCocktails } from "../../api/callCockTailDB";
import { UserContext } from "../../App";
const BarStool = ({
  key,
  id,
  drinkname,
  img,
  category,
  alc,
  glass,
  instructions,
  ingredients,
  measures,
}) => {
  console.log("BarStoolrender");
  const [expand, setExpand] = useState(false);
  const value = useContext(UserContext);
  const [visible, setVisible] = useState(true);
  const [owncategory, setCategory] = useState(category);
  const [ownalc, setAlc] = useState(alc);
  const [ownglass, setGlass] = useState(glass);
  const [owninstructions, setInstructions] = useState(instructions);
  const [owningredients, setIngredients] = useState(ingredients);
  const [ownmeasures, setMeasures] = useState(measures);
  //this useEffect as a filter for components
  useEffect(() => {
    if (value) {
      if (value.category && value.category !== owncategory) setVisible(false);
      else if (value.glass && value.glass !== ownglass) setVisible(false);
      else if (value.alcoholContent && value.alcoholContent !== ownalc)
        setVisible(false);
      else if (
        value.ingredient &&
        !owningredients.some((l) => l === value.ingredient)
      )
        setVisible(false);
      else setVisible(true);
    }
  }, [
    owncategory,
    ownalc,
    ownglass,
    owningredients,
    value?.category,
    value?.glass,
    value?.alcoholContent,
    value?.ingredient,
  ]);
  //this useEffect happens in case the drink does not have the full
  //detail and needs a separate api call in order to view it`s details
  useEffect(() => {
    getCocktails(`lookup.php?i=${id}`).then((res) => {
      setCategory(res.data.drinks[0].strCategory);
      setAlc(res.data.drinks[0].strAlcoholic);
      setGlass(res.data.drinks[0].strGlass);
      setInstructions(res.data.drinks[0].strInstructions);
      setIngredients(
        [
          res.data.drinks[0].strIngredient1,
          res.data.drinks[0].strIngredient2,
          res.data.drinks[0].strIngredient3,
          res.data.drinks[0].strIngredient4,
          res.data.drinks[0].strIngredient5,
          res.data.drinks[0].strIngredient6,
          res.data.drinks[0].strIngredient7,
          res.data.drinks[0].strIngredient8,
          res.data.drinks[0].strIngredient9,
          res.data.drinks[0].strIngredient10,
          res.data.drinks[0].strIngredient11,
          res.data.drinks[0].strIngredient12,
          res.data.drinks[0].strIngredient13,
          res.data.drinks[0].strIngredient14,
          res.data.drinks[0].strIngredient15,
        ].filter((l) => l !== null)
      );
      setMeasures(
        [
          res.data.drinks[0].strMeasure1,
          res.data.drinks[0].strMeasure2,
          res.data.drinks[0].strMeasure3,
          res.data.drinks[0].strMeasure4,
          res.data.drinks[0].strMeasure5,
          res.data.drinks[0].strMeasure6,
          res.data.drinks[0].strMeasure7,
          res.data.drinks[0].strMeasure8,
          res.data.drinks[0].strMeasure9,
          res.data.drinks[0].strMeasure10,
          res.data.drinks[0].strMeasure11,
          res.data.drinks[0].strMeasure12,
          res.data.drinks[0].strMeasure13,
          res.data.drinks[0].strMeasure14,
          res.data.drinks[0].strMeasure15,
        ].filter((l) => l !== null)
      );
    });
  }, []);
  function addToCart(e) {
    const newCart = [...value.cart];
    const newItem = { idDrink: id, strDrink: drinkname, strDrinkThumb: img };
    newCart.push(newItem);
    value.addToCart(newCart);
  }
  return (
    <>
      {visible ? (
        <div className="barStool">
          <h2 className="drinkTitle">{drinkname}</h2>
          <img className="drinkImage" src={img} />
          <button onClick={(e) => addToCart(e)} className="addToCart">
            +
          </button>
          <button onClick={(e) => setExpand(!expand)} className="expand">
            {" "}
            >{" "}
          </button>
          {expand ? (
            <div id="details">
              <p>Category: {owncategory}</p>
              <p>Alcohol content: {ownalc}</p>
              <p>Glass: {ownglass}</p>
              <p>Instructions: {owninstructions}</p>
              <p>
                Ingredients:{" "}
                {owningredients
                  .map((l, i) => ownmeasures[i] + " " + l)
                  .join(", ")}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default BarStool;
