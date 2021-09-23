import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const { product } = props;
  let total = 0;
  for (const cart of product) {
    total = total + cart.price;
  }
  const shipping = total * .05;
  const totalBeforeTax = total + shipping;
  const estimatedTax = totalBeforeTax * .10;
  const totalOrder = totalBeforeTax + estimatedTax;
  return (
    <div>
      <h2>Order Summary</h2>
      <h4>Items ordered: {product.length}</h4>
      <p>Items: ${total.toFixed(2)}</p>
      <p>Shipping & Handling: ${shipping.toFixed(2)}</p>
      <p>Total before tax: ${totalBeforeTax.toFixed(2)}</p>
      <p>Estimated Tax: ${estimatedTax.toFixed(2)}</p>
      <p className="totalOrder">Order Total: ${totalOrder.toFixed(2)}</p>
    </div>
  );
};

export default Cart;