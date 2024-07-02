/* eslint-disable no-unused-vars */
import productData from '../../public/data/relojes.json';
import React, { useState, useEffect } from 'react';
import ProductCard from '../componentes/ProductCard';
import './Home.css';
import CollectionCard from '../componentes/CollectionCard';

import HeaderPrincipal from '../componentes/HeaderPrincipal';
import FooterPrincipal from '../componentes/FooterPrincipal';

function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [featuredCollections, setFeaturedCollections] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

 
  useEffect(() => {
    console.log('productData: ', productData)
    const uniqueBrands = [...new Set(productData.map(marca => marca.nombre))];
    console.log('uniqueBrands:', uniqueBrands)

    setFeaturedCollections(productData.slice(0, 3));
    console.log('featuredCollections: ', featuredCollections)
    let featuredProductList = featuredCollections.flatMap(modelo => {
      let list =[];
      for(let i = 0; i<4; i++){
        list.push(modelo.modelos[i]);
      }
      return list;
    });

    setFeaturedProducts(featuredProductList.map((p, index) => ({ ...p, marca: uniqueBrands[Math.floor(index/4)] })));
    let FirtsProducts = productData.flatMap(marca =>marca.modelos[0]);
    FirtsProducts = FirtsProducts.map((p, index) => ({ ...p, marca: uniqueBrands[index] }));

    setNewCollections(productData.slice(2, 5));

    let newProductList = newCollections.flatMap(modelo => {
      let list =[];
      for(let i = 0; i<2; i++){
        list.push(modelo.modelos[i]);
      }
      return list;
    });
    setNewProducts(newProductList.map((p, index) => ({ ...p, marca: uniqueBrands[2+Math.floor(index/2)] })));


  }, [featuredCollections, newCollections, newProducts]);
  
  const handleSearch = (searchTerm) => {
    const filtered = productData.flatMap(marca => marca.modelos).filter(modelo =>
      modelo.Serie.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    console.log(filteredProducts);
  };
  return (
    <>
    <HeaderPrincipal />
    <div>
      <main>
        {/* Mostrar Colecciones destacadas */}
        <section className='collections'>
          <h2>Colecciones destacadas</h2>
          <div className='collections-container'>
            {featuredCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} /> 
            ))}
          </div>
        </section>
      {/* Mostrar productos destacados */}
        <section className="products">
          <h2>Productos más vendidos</h2>
          <div className='products-container'>
            {featuredProducts.map((p, index) => (
              <ProductCard key={index} product={p} brand={p.marca}/>
            ))}
          </div>
        </section>

        {/* Mostrar Colecciones nuevas */}
        <section className='collections'>
          <h2>Colecciones nuevas</h2>
          <div className='collections-container'>
            {newCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} /> 
            ))}
          </div>
        </section>

{/* Mostrar productos nuevos */}
        <section className="products">
          <h2>Nuevos Productos</h2>
          <div className="products-container">
            {newProducts.map((p, index) => (
              <ProductCard key={index} product={p} brand={p.marca}/>
            ))}
            
          </div>
        </section>        
      </main>
    </div>
    <FooterPrincipal />
    </>
  );
}

export default Home;
