import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";
const Cart = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            props.oncartHideHandler();
          }}
        >
          close
        </button>
      </div>
      <p>Cart items</p>

      <table>
        <tr>
          <th>ITEM </th>
          <th>PRICE </th>
          <th>QUANTITY </th>
        </tr>
        {cartContext.cartItems.map((cartItem) => {
          return (
            <CartItem
              onRemoveHandle={cartContext.removeItemIntoCart}
              title={cartItem.title}
              price={cartItem.price}
              imageUrl={cartItem.imageUrl}
              quantity={cartItem.quantity}
            />
          );
        })}
      </table>
    </div>
  );
};

export default Cart;
