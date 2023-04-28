import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'

import { Link } from "react-router-dom";

const Cart = () => {
  const auth = useSelector((state) => state.auth);

  const [cartProduct, setCartProduct] = useState({}) 

  const location = useLocation();

  useEffect(() => {
    const getSingleProduct = location.state?.singleProduct;
    console.log(getSingleProduct);
    if(getSingleProduct) {
      setCartProduct(getSingleProduct);
    }
  }, [location.state]);


  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {auth.token ? (
        <div>
        <div className="titles">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
        </div>
        <div className="cart-items">
          {Object.keys(cartProduct).length > 0 ? (
            <div className="cart-item">
            <div className="cart-product">
              <img src={cartProduct.image} alt="img" />
              <div>
                <h3>{cartProduct.title}</h3>
              </div>
            </div>
            <div className="cart-product-price">Rs.{cartProduct.price}</div>
          </div>
          ): (
            <h3>Cart is empty</h3>
          )
          }
        </div>
      </div>
      ) : (
        <h3>Please login first</h3>
      )}
        
    </div>
  );
};

export default Cart;
