/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500 // Duración del anuncio en milisegundos (1.5 segundos)
      });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.Serie !== productId));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Eliminado del carrito',
        showConfirmButton: false,
        timer: 1500 // Duración del anuncio en milisegundos (1.5 segundos)
      });
  };

  return (
    <>
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
    
    </>

  );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export default CartContext;
