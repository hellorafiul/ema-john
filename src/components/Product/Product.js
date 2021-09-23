import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
  const { name, img, price, stock, seller } = props.product
  const shopping = <FontAwesomeIcon icon={faShoppingCart} />
  return (
    <div className='product-container'>
      <div className='img'>
        <img src={img} alt="" />
      </div>
      <div className="product">
        <h2>{name}</h2>
        <p><small>Visit the {seller} Store</small></p>
        <p className="price">${price}</p>
        <p>only <span>{stock}</span> left in stock - order soon</p>
        <button onClick={() => props.addCart(props.product)} className='btn-cart'>{shopping} add to cart</button>
      </div>
    </div>
  );
};

export default Product;