const Product = (props) => {
  return (
    <div className="col-6">
      <div className="card m-5 m-5">
        <div class="m-2">
          <h3 className="text-center">{props.title}</h3>
        </div>
        <img className="card-img-top" src={props.imageUrl} alt="Card" />
        <div className="card-body d-flex justify-content-between">
          <p>${props.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              props.onAddtoCart({
                title: props.title,
                price: props.price,
                imageUrl: props.imageUrl,
              });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
