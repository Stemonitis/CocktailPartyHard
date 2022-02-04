import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import catergories;
import catergories;
import glasses;
import './App.css';

function App() {
  //hooks for the filters
  const [name, useName] = useState("");
  const [id, useId] = useState("")
  const [categories, setCatergories] = useState(catergories);
  const [ingredients, setIngredients] = useState(ingredients);
  const [alcoholContent, setAlcoholContent] = useState(alcoholContent);
  


  useEffect(()=> {
    //call the api here
  }, [name, catergories, ingredients, alcoholContent])
  return (
    <div className="App">
      <Link to="/partylist">Your Party List</Link> 
      <BarShelves />
      <BarStools/>
    </div>
  );
}

export default App;
