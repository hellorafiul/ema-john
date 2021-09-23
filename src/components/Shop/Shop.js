import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';
import Cart from './../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./products.JSON')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const hadndleAddToCart = (eachProduct) => {
    console.log(eachProduct)
    const newCart = [...cart, eachProduct];
    setCart(newCart);
  }

  return (
    <div className='products-container'>
      <div className="products">
        {
          products.map(product => <Product
            product={product}
            key={product.key}
            addCart={hadndleAddToCart}
          ></Product>)
        }
      </div>
      <div className="cart">
        <Cart product={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;