/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Para los enlaces de navegación
import SearchBar from './Searchbar'; // Importa el componente SearchBar
import PropTypes from 'prop-types';
import './HeaderPrincipal.css';

function Header({ onSearch }) {  // Recibe la función onSearch como prop
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Llama a la función onSearch del componente padre
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">La Tiendita del Abuelo</Link> {/* Enlace al logo que lleva a la página principal */}
        </div>
        <nav className='nav-header-principal'>
          <ul className='sectsPrincipal'>
            <li>
              <Link to="/mas-vendidos">Más Vendidos</Link> 
            </li>
            <li>
              <Link to="/nuevos">Nuevos</Link>
            </li>
            <li>
              <Link to="/ofertas">Ofertas</Link>
            </li>
            <li>
                <Link to="/carrito">Ver Carrito</Link>
            </li>
          </ul>
        </nav>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} /> {/* Pasa el término de búsqueda y la función de cambio al componente SearchBar */}
      </div>
    </header>
  );
}
Header.propTypes = {
    onSearch: PropTypes.func.isRequired, // Validación de la función onSearch
  };
  
export default Header;
