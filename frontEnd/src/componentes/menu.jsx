import {Outlet, Link } from "react-router-dom"
import './menu.css'
import Header from './Header';
import Footer from './Footer';

function Menu() {
    return(
        <div>
            <div className="navegador">
                <nav className="nav-menu">
                    <p style={{color: "black", paddingTop: "23px", paddingLeft:"29px", margin:"0px", fontSize:"20px", fontFamily:"sans-serif"}}>Admin</p>
                    <ul>
                        <li>
                            <Link to ="/dashbr">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/usureg">Usuarios registrados</Link>
                        </li>
                        <li>
                            <Link to="/listPrd">Productos</Link>
                            
                        </li>
                        <li>
                            <Link to ="/ordAdmin">Ordenes</Link>
                        </li>
                        <li>
                            <Link to="/Productos_mas_vendidos">Productos más<br/> vendidos</Link>
                        </li>
                        <li>
                            <Link to="/Series">Series</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                <Outlet/>
                </div>
            </div>
        </div>
    )
};

export default Menu;