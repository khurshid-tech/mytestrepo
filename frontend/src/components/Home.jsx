import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="home-container">
        <>
          <h2>Products</h2>
          <div className="products">
            {products &&
              products?.map((product) => (
                <div key={product.id} className="product">
                  <h6>{product.title.substring(0,30)}</h6>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span className="price">Rs. {product.price}</span>
                  </div> 
                  <Link to="/cart" state={{ singleProduct: product }}>
                    Add To Cart
                  </Link>
                </div>
              ))}
          </div>
        </>
    </div>
  );
};

export default Home;
