import CartItem from "./CartItem";
import styles from "./Cart.module.css";
const Cart = (props) => {
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
        {props.cartItems.map((cartItem) => {
          return (
            <CartItem
              onRemoveHandle={props.onCartItemRemoveHandler}
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
