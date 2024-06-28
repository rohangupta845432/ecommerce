import Product from "./Product";
import CartContext from "../store/cart-context";
import { useContext } from "react";
const Products = (props) => {
  const cartContext = useContext(CartContext);
  return (
    <>
      <div className="container" style={{ "max-width": "1000px" }}>
        <h1>Product list</h1>
        <div className="row">
          {props.productsArr.map((product) => {
            return (
              <Product
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                onAddtoCart={cartContext.additemIntoCart}
              ></Product>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
