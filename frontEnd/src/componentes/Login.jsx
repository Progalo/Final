import React from 'react';
import '../componentes/Login.css'
import Header from './Header'
import Footer from './Footer'


function Login(){
    return (
        <>
          <Header />
          <div className="main-container">
            <div className="content">
              <div className='wrapper'>
                <form action="">
                  <h4>Ingreso para clientes registrados</h4>
                  <div className='input-box'>
                    <input type='text' placeholder='email' required/>
                  </div>
                  <div className='input-box'>
                    <input type='password' placeholder='password' required/>
                  </div>
                  <button type='submit'>Ingresar</button>
                  <div className='forgot-password'>
                    <p><a href='#'>Olvidé mi contraseña</a></p>
                  </div>
                  <div className='register'>
                    <p><a href='#'>No tengo cuenta deseo registrame</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )
}

export default Login