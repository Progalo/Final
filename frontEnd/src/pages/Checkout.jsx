import React from 'react'

import './Checkout.css'
import { Link } from "react-router-dom";
import HeaderPrincipal from '../componentes/HeaderPrincipal';
import FooterPrincipal from '../componentes/FooterPrincipal';

function CheckOut() {

    return (
        <>
        <HeaderPrincipal />
        <div id="Checkout">
        <div id="Aviso">
            <p>¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el boton "Completar orden" al final de la pagina.</p>
        </div>
        <div className="Items">
            <p><b>Datos de Compra</b></p>
        </div>
        <div id="DatosEnvio">
        <p><b>Direccion de Envio</b></p>
        <p><input type="text" className="inputTexto" placeholder="Linea 1"/></p>
        <p><input type="text" className="inputTexto" placeholder="Linea 2"/></p>
        <p><input type="text" className="inputTexto" placeholder="Distrito"/></p>
        <p><input type="text" className="inputTexto" placeholder="Ciudad"/></p>
        <p><input type="text" className="inputTexto" placeholder="Pais"/></p>
        </div>
        <div id="Pago">
            <div id="FormaPago">
            <p><b>Pago</b></p>
            <p>
                <input type="radio" id="Opcion1" name="opcion1" value="opcion1"></input>
                <label for="Opcion1">Pago con código QR</label><br/><br/>
                <input type="radio" id="Opcion1" name="opcion1" value="opcion1"></input>
                <label for="Opcion1">Pago con tarjeta de credito</label>
            </p>
            </div>
            <div id="NumTarjeta">
                <p><input type="text" className="inputTexto" placeholder="Numero de Tarjeta"/></p>
                <p><input type="text" className="inputTexto" placeholder="Nombre en Tarjeta"/></p>
                <p><input type="text" className="inputTexto" placeholder="Vencimiento"/><input type="text" className="inputTexto" placeholder="CCV" max="999"/></p>
            </div>
        </div>
        <div className="Items">
            <p><b>Método de Envío</b></p>
        </div>
        <div id="MetodoEnvio">
                <input type="radio" id="Opcion2" name="opcion2" value="opcion2"></input>
                <label for="Opcion2">Economico Aereo - S/ 10.00</label>
                <input type="radio" id="Opcion2" name="opcion2" value="opcion2"></input>
                <label for="Opcion2">Envio prioritario (5 a 10 días) - S/ 17.00</label>
        </div>
        <div id="Pedido">
            <p><b>Items en Pedido:</b></p>
            <div id="ProductoPedido">
                <p>3x Swatch - CHEQUERED WHITE SB02W400</p>
                <p>S/ 1500</p>    
            </div>
        </div>
        <div id="Resumen">
            <p><b>Resumen de Orden:</b></p>
            <div id="ResumenPedido">
                <p>Subtotal:        S/.1500.00</p>
                <p>Envio:           S/.17.00</p>
                <p>Impuestos:       S/.18.00</p>
                <p>Total:           S/.1535.00</p>    
            </div>
            <div id="Orden">
                <button type="button" id="OrdenButton"><Link to="/pedidocompletado">Completar Orden</Link></button>
            </div>
        </div>

        </div>
        <FooterPrincipal />
        </>
    )
    
}


export default CheckOut