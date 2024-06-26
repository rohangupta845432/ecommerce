import Product from "./Product";

const Products = (props) => {
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
              ></Product>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
