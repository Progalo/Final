/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../public/data/relojes.json';
import CartContext from '../CartContext'

import HeaderPrincipal from '../componentes/HeaderPrincipal';
import FooterPrincipal from '../componentes/FooterPrincipal';

function ProductDetail() {
    const { addToCart } = useContext(CartContext);
    const { serieId } = useParams(); 

    productData.forEach((p)=>{
        p.modelos=p.modelos.map((m) =>({ ... m, marca : p.nombre}));
    })
    const product = productData
    .flatMap(marca => marca.modelos)
    .find(modelo => modelo.Serie === serieId);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

  

    return (
        <>
        <HeaderPrincipal />
        <section className="product-detail">
            <div className="product-detail-container">
                <div className="product-image">
                    <img src={product.imagen} alt={product.Serie} />
                </div>
                <div className="product-info">
                    <h2>{product.Serie}</h2>
                    <p className="brand">Marca: {product.marca}</p>
                    <p className="price">S/. {product.precio}</p>
                    <p className="description">{product.Descripcion}</p>
                    <p className="features">{product.Caracteristicas}</p>
                    <button className="add-to-cart" onClick={() => addToCart(product)}>Agregar al Carrito</button>
                </div>
            </div>
        </section>
        <FooterPrincipal />
        </>
  );
}

export default ProductDetail;
