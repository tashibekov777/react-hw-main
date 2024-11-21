import "./index.css";

export function ProductCard(props) {
  const { image, category, title, price } = props.data;
  const { onAddToCart } = props;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="category">{category}</div>
      <h4 className="title">{title}</h4>
      <div className="price">${price.toFixed(2)}</div>
      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(props.data)}
      >
        Add to Cart
      </button>
    </div>
  );
}
