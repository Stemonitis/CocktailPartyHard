import React, { useContext } from "react";
import { UserContext } from "../../App";
import BarStools from "../BarStools/BarStools";
import "./PartyList.css";

const PartyList = ({ cart }) => {
  return (
    <div id="partyContainer">
      <h1 className="redNeon">Your Party Items</h1>
      <BarStools drinks={{ data: { drinks: cart } }} />
    </div>
  );
};

export default PartyList;
