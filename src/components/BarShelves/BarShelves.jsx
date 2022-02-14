import React, { useEffect, useState } from "react";
import { getCocktails } from "../../api/callCockTailDB";
import "./BarShelves.css";
const BarShelves = ({
  random,
  setRandom,
  name,
  setName,
  id,
  setID,
  category,
  setCategory,
  glass,
  setGlass,
  ingredient,
  setIngredient,
  alcoholContent,
  setAlcoholContent,
}) => {
  const [catList, setCatList] = useState([]);
  const [glassList, setGlassList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  //we need to retrieve the lists for options in our api here
  useEffect(() => {
    getCocktails("list.php?c=list").then((res) => {
      setCatList(res);
    });
    getCocktails("list.php?g=list").then((res) => setGlassList(res));
    getCocktails("list.php?i=list").then((res) => setIngredientList(res));
  }, []);
  //here every time we change the name and id we want to reset other options
  function nameChange(e) {
    setName(e);
    setRandom(false);
    setID("");
  }
  function IDChange(e) {
    setID(e);
    setName("");
    setRandom(false);
    setIngredient("");
  }
  function randomChange(e) {
    if (random.length > 10) setRandom("a");
    else setRandom(random + "g");
    setID("");
    setName("");
    setCategory("");
    setIngredient("");
    setGlass("");
    setAlcoholContent("");
  }
  function catChange(e) {
    setCategory(e);
    setRandom(false);
  }
  function glassChange(e) {
    setGlass(e);
    setRandom(false);
  }
  function ingrChange(e) {
    setIngredient(e);
    setRandom(false);
  }
  function alcChange(e) {
    setAlcoholContent(e);
    setRandom(false);
  }
  return (
    <div id="barShelves">
      <input
        className="redNeon"
        id="drinkName"
        type="text"
        onChange={(e) => nameChange(e.target.value)}
        value={name}
        placeholder="Enter your drink name here..."
      ></input>
      <input
        className="redNeon"
        id="drinkID"
        type="number"
        onChange={(e) => IDChange(e.target.value)}
        value={id}
        placeholder="Enter your drink id here..."
      ></input>
      <br />
      <div id="drinkCategory" className="blueNeon">
        Filter by drink category...
      </div>
      <select
        value={category}
        name="drinkCategories"
        id="catSelect"
        onChange={(e) => catChange(e.target.value)}
      >
        <option value="">None</option>
        {catList?.data?.drinks?.map((cat, i) => (
          <option key={"cat" + i} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>
      <div id="glassType" className="blueNeon">
        Filter by glass type...
      </div>
      <select
        id="glassSelect"
        name="glasses"
        value={glass}
        onChange={(e) => glassChange(e.target.value)}
      >
        <option value="">None</option>
        {glassList?.data?.drinks?.map((gl, i) => (
          <option key={"glass" + i} value={gl.strGlass}>
            {gl.strGlass}
          </option>
        ))}
      </select>
      <div id="ingFilter" className="blueNeon">
        Filter by Ingredient...
      </div>
      <select
        id="ingredientSelect"
        value={ingredient}
        name="ingredients"
        onChange={(e) => ingrChange(e.target.value)}
      >
        <option value="">None</option>
        {ingredientList?.data?.drinks?.map((ing, i) => (
          <option key={"ing" + i} value={ing.strIngredient1}>
            {ing.strIngredient1}
          </option>
        ))}
      </select>

      <div id="alcFilter" className="blueNeon">
        Filter By Alcohol Content...
      </div>
      <select
        id="alcSelect"
        name="alcoholic"
        value={alcoholContent}
        onChange={(e) => alcChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non alcoholic">Non alcoholic</option>
        <option value="Optional alcohol">Optional alcohol</option>
        ))
      </select>
      <div>
        <button id="neonButton" onClick={(e) => randomChange(e.target.value)}>
          RANDOM COCKTAIL
        </button>
      </div>
    </div>
  );
};

export default BarShelves;
