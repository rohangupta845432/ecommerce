import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultValue = {
  cartItem: [],
  totalItem: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const filteredcartList = state.cartItem.filter((item) => {
      return item.title !== action.data.title;
    });
    if (state.cartItem.length === filteredcartList.length) {
      console.log("dataDoes not exist");
      return {
        cartItem: [...state.cartItem, action.data],
        totalItem: state.totalItem + 1,
      };
    } else {
      const existCartData = state.cartItem.filter((item) => {
        return item.title === action.data.title;
      });
      const updateddata = {
        ...action.data,
        quantity: existCartData[0].quantity + 1,
        price: (existCartData[0].quantity + 1) * action.data.price,
      };
      return {
        cartItem: [...filteredcartList, updateddata],
        totalItem: state.totalItem + 1,
      };
    }
  }

  if (action.type === "REMOVE") {
    return {
      cartItem: state.cartItem.filter((item) => {
        return item.title !== action.data;
      }),
      totalItem:
        state.totalItem -
        state.cartItem.filter((item) => {
          return item.title === action.data;
        })[0].quantity,
    };
  }
  return {
    cartItem: [],
    totalItem: 0,
  };
};

const CartProvider = (props) => {
  const [cartData, dispatchCartAction] = useReducer(cartReducer, defaultValue);

  const additemIntoCart = (cartItem) => {
    // console.log(cartItem);
    const newCartItem = { ...cartItem, quantity: 1 };
    dispatchCartAction({ data: newCartItem, type: "ADD" });
  };

  const removeItemIntoCart = (cartItemName) => {
    dispatchCartAction({ data: cartItemName, type: "REMOVE" });
  };

  const data = {
    cartItems: cartData.cartItem,
    totalItem: cartData.totalItem,
    additemIntoCart: additemIntoCart,
    removeItemIntoCart: removeItemIntoCart,
  };
  return (
    <CartContext.Provider value={data}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
