import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div id="cart">
      <div id="counter">{cart.length}</div>
      <img
        id="cartImg"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_407019.png&f=1&nofb=1"
      />
    </div>
  );
};

export default Cart;
