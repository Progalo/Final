import React from 'react';
import { useState } from 'react';
import data from '../../public/data/relojes.json';
import './AgregarSerie.css'
import Header from './Header';
import Footer from './Footer';
import Menu from './menu';

function AgregarSerie () {
    const[reloj,setReloj] = useState("");
    console.log(reloj);
    return(
        <>
        <Header />
        <div className="main-container">
        <Menu />
        <div>
            <div className='titulos'>
                <h3>Agregar Serie</h3>
            </div>

            <br />
            <div className='ag_serie'>
                <div>
                <div className='ag_imagen'></div>
                <br />
                <div className='ag_imagen_button'>Agregar Imagen</div>
                </div>
                <div style={{paddingLeft:"20px"}}>
                    <h3 style={{padding:"0",margin:"0"}}>Nombre</h3>
                    <div className='ag_nombre'></div>
                    <br />
                    <h3 style={{padding:"0",margin:"0"}}>Descripción</h3>
                    <div className='ag_descripcion'></div>
                    <br />
                    <br />
                    <br />
                    <div className='ag_p_serie'>
                    <div className='titulos'>
                        <h3>Productos en la serie</h3>
                        </div>
                    <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Fecha de creación</th>
                        <th>Nro. Productos</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                        <tr key={item.id}> 
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.fecha_creacion}</td>
                            <td>{item.nro_productos}</td>
                            <td>{item.acciones}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}
export default AgregarSerie