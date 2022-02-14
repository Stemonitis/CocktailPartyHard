import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCocktails } from "./api/callCockTailDB";
import BarShelves from "./components/BarShelves/BarShelves";
import BarStools from "./components/BarStools/BarStools";
import Cart from "./components/Cart/Cart";
import "./App.css";

export const UserContext = React.createContext();

function App({ cart, addToCart }) {
  //hooks for the filters that trigger api update
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [category, setCategory] = useState("");
  const [glass, setGlass] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [alcoholContent, setAlcoholContent] = useState("");
  const [random, setRandom] = useState(false);

  //hooks for the data
  const [drinks, setDrinks] = useState(null);

  //this is a useEffect for the api call
  useEffect(() => {
    //call the api here
    //make sure we do not trigger the random api
    let string = "";
    //in the case we have an id we just output one particular drink
    if (id) {
      string = `lookup.php?i=${id}`;
    }
    //in the case we have random set to true we just output one random drink
    else if (random) string = "random.php";
    //search part (we use search with additional filters here)
    else if (name) {
      if (name.length === 1) {
        string = `search.php?f=${name}`;
      } else {
        string = `search.php?s=${name}`;
      }
    }
    //otherwise, if the search is not by word, and it is merely filtering where we use the
    //other type of the api
    else if (category && !name && !glass && !ingredient && !alcoholContent) {
      string = `filter.php?c=${category}`;
    } else if (glass && !name && !category && !ingredient && !alcoholContent) {
      string = `filter.php?g=${glass}`;
    } else if (ingredient && !name && !category && !glass && !alcoholContent) {
      string = `filter.php?i=${ingredient}`;
    } else if (alcoholContent && !name && !category && !glass) {
      string = `filter.php?a=${alcoholContent}`;
    }
    if (string)
      getCocktails(string.replace(/ /g, "_")).then((res) => setDrinks(res));
  }, [
    random,
    name,
    id,
    category,
    glass,
    ingredient,
    alcoholContent,
    cart,
    addToCart,
  ]);
  return (
    <UserContext.Provider
      value={{
        category: category,
        glass: glass,
        ingredient: ingredient,
        alcoholContent: alcoholContent,
        cart: cart,
        addToCart: addToCart,
      }}
    >
      <div className="App">
        <Link to="/partylist">
          <Cart cart={cart} />
        </Link>
        <BarShelves
          random={random}
          setRandom={setRandom}
          name={name}
          setName={setName}
          id={id}
          setID={setID}
          category={category}
          setCategory={setCategory}
          glass={glass}
          setGlass={setGlass}
          ingredient={ingredient}
          setIngredient={setIngredient}
          alcoholContent={alcoholContent}
          setAlcoholContent={setAlcoholContent}
        />
        <BarStools drinks={drinks} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
