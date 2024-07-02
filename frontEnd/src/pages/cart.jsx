/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import CartContext from '../CartContext';

import HeaderPrincipal from '../componentes/HeaderPrincipal';
import FooterPrincipal from '../componentes/FooterPrincipal';
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.precio), 0);
  };

  return (
    <>
    <HeaderPrincipal />
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.Serie} className='Cart-product'>
                <div className='Cart-img'><img src={item.imagen} alt={item.Serie} /></div>
                <div className='Cart-info'>
                    <h3>{item.Serie}</h3>
                    <p>S/. {item.precio}</p>  
                    <button onClick={() => removeFromCart(item.Serie)}>Eliminar</button>
                </div>                
                
              </li>
            ))}
          </ul>
          <p className='Cart-Total'>Total: S/. {calculateTotal()}</p>
          <div className="divCheckout">
            <button type="button" id="CheckoutButton"><Link to="/checkout">CheckOut</Link></button>
        </div>
        </>
      )}
    </div>
    <FooterPrincipal />
    </>
  );

}

export default Cart;
