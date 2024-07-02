import React, { useState, useRef } from 'react';
import './AgregarProd.css';
import data from '../../public/data/relojes.json';
import Header from './Header';
import Footer from './Footer';
import Menu from './menu';

const AgregarProd = () => {
  const [item, setItem] = useState(data);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [serie, setSerie] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [imagen, setImagen] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevoId = item.length > 0 ? Math.max(...item.map(m => m.id)) + 1 : 1;

    const nuevoModelo = {
      id: nuevoId,
      nombre: nombre,
      modelos: [
        {
          Serie: serie,
          imagen: imagen,
          precio: parseFloat(precio),
          Descripcion: descripcion,
          Caracteristicas: caracteristicas,
          Stock: parseInt(stock)
        }
      ]
    };

    // Obtener los datos existentes del almacenamiento local
    const datosGuardados = localStorage.getItem('relojes');
    const datosExistentes = datosGuardados ? JSON.parse(datosGuardados) : [];


    // Agregar el nuevo modelo a los datos existentes
    const datosActualizados = [...item, nuevoModelo];

    // Actualizar el estado 'item' con los datos actualizados
    setItem(datosActualizados);

    // Limpiar formulario
    setNombre('');
    setDescripcion('');
    setCaracteristicas('');
    setSerie('');
    setPrecio('');
    setStock('');
    setImagen('');

    // Convertir los datos a formato JSON
    const jsonData = JSON.stringify(datosActualizados);

    // Guardar los datos en el almacenamiento local del navegador
    localStorage.setItem('relojes', jsonData);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Header />
      <div className='main-container'>
        <Menu />
        <div className='content'>
          <div className='container-form'>
            <div className='form-header'>
              <h3>Agregar Producto</h3>
            </div>
            <div className='form-left'>
              <input
                type="file"
                id="cargarImagen"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
                ref={fileInputRef}
              />
              <div className="image-preview">
                {imagen ? (<img src={imagen} alt="" />) : (<span>No hay imagen seleccionada</span>)}
              </div>
              <input
                id="add-img"
                type="button"
                value="Agregar Imagen"
                onClick={handleButtonClick}
              />
            </div>
            <div className='form-right'>
              <form className='form-right-top' onSubmit={handleSubmit}>
                <p>
                  <label>Nombre</label>
                  <br />
                  <input
                    id="add-name"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </p>
                <p>
                  <label>Descripcion</label>
                  <br />
                  <textarea
                    id="add-des"
                    rows="5"
                    cols="40"
                    maxLength="150"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </p>
                <p>
                  <label>Caracteristicas</label>
                  <br />
                  <textarea
                    id="add-features"
                    rows="7"
                    cols="40"
                    maxLength="150"
                    value={caracteristicas}
                    onChange={(e) => setCaracteristicas(e.target.value)}
                  />
                </p>
                <p>
                  <label>Serie</label>
                  <br />
                  <input
                    id="add-serie"
                    type="text"
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                  />
                </p>
                <p>
                  <label>Precio</label>
                  <br />
                  S/. <input
                    id="add-price"
                    type="text"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </p>
                <p>
                  <label>Stock</label>
                  <br />
                  <input
                    id="add-stock"
                    type="text"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </p>
                <div>
                  <input id="save" type="submit" value="Guardar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AgregarProd;