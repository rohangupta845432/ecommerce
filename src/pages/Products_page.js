import React from "react";
import { useState } from "react";

// import Header from "../components/Layout/Header";
import Products from "../components/Products";
import Cart from "../components/Cart";
import CartProvider from "../store/CartProvider";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const Products_page = () => {
  const [isCartShow, setIsCartShow] = useState(false);
  const [cartItem, setcartItem] = useState(cartElements);
  const cartShowButtonHandler = () => {
    setIsCartShow(true);
  };

  const cartHideButtonHandler = () => {
    setIsCartShow(false);
  };

  const cartItemRemove = (itemname) => {
    console.log("hello");
    setcartItem((currentValue) => {
      return currentValue.filter((item) => {
        return item.title !== itemname;
      });
    });
  };

  return (
    <CartProvider>
      {isCartShow && (
        <Cart
          cartItems={cartItem}
          onCartItemRemoveHandler={cartItemRemove}
          oncartHideHandler={cartHideButtonHandler}
        />
      )}
      {/* <Header onCartShowButtonHandler={cartShowButtonHandler}></Header> */}
      <Products productsArr={productsArr}></Products>
    </CartProvider>
  );
};

export default Products_page;
