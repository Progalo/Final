import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Series.css'
import Header from './Header';
import Footer from './Footer';
import Menu from './menu';

const Series = () => {
    const [relojes, setRelojes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [relojesPerPage] = useState(10);

    useEffect(() => {
        fetch('../data/relojes.json')
            .then(response => response.json())
            .then(data => {
                setRelojes(data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    // Obtener los relojes de la página actual
    const indexOfLastReloj = currentPage * relojesPerPage;
    const indexOfFirstReloj = indexOfLastReloj - relojesPerPage;
    const currentRelojes = relojes.slice(indexOfFirstReloj, indexOfLastReloj);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calcular el número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(relojes.length / relojesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Header />
            <div className="main-container">
                <Menu />
                <div className="content">
                    <div className='series-container'>
                        <div className='series-header'>
                            <h3>Series</h3>
                            <Link to="/addseries" className="add-series-button">+ Agregar Serie</Link>
                        </div>
                        <br />
                        <div className='series-search'>
                            <input
                                id='series-search-input'
                                type='text'
                                placeholder="buscar .."
                            />
                        </div>
                        <br />
                        <div className='series-results'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Fecha de creación</th>
                                        <th>Stock</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRelojes.map((reloj, index) => (
                                        <tr key={index}>
                                            <td>{reloj.id}</td>
                                            <td>{reloj.nombre}</td>
                                            <td>{reloj.fecha_registro}</td>
                                            <td>{reloj.stock}</td>
                                            <td>{reloj.estado}</td>
                                            <td>Acciones...</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination">
                            <ul>
                                {pageNumbers.map(number => (
                                    <li key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
                                        <a href="#">{number}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Series;