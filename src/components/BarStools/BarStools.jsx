import React from 'react';
import BarStool from "BarStool"
const BarStools = (drinks) => {

  return <div className = "barStoolcontainer">
      {drinks.map((drink, i)=> <BarStool key = {drink.id} />)}
  </div>;
};

export default BarStools;
