import styles from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <tr className={styles.cartItem__row}>
      <td className={styles.cartItem__col}>
        <img className={styles.cartItem__img} src={props.imageUrl} />
        <h4 className={styles.cartItem__title}>{props.title}</h4>
      </td>
      <td>${props.price}</td>
      <td>
        <input className={styles.cartItem__qty} value={props.quantity} />
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            props.onRemoveHandle(props.title);
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
