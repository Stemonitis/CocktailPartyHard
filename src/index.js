import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PartyList from "./components/PartyList/PartyList";
import "./index.css";

const Index = () => {
  const [cart, addToCart] = useState([]);
  return (
    <div>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              exact
              element={<App cart={cart} addToCart={addToCart} />}
            />
            <Route
              path="/partylist"
              exact
              element={<PartyList cart={cart} />}
            />
          </Routes>
        </Router>
      </React.StrictMode>
      ,
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
