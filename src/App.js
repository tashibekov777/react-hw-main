import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`Добавлено в корзину: ${product.title}`);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            data={product}
            key={product.id}
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
