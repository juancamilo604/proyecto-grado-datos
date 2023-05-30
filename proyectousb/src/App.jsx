import { useState } from 'react';
import './App.css';
import {Route,Routes,BrowserRouter as Router, useNavigate} from "react-router-dom"
import ExcelToWordConverter from "./pages/home"

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        <Route element={<Home></Home>} path='/'></Route>
    <Route path='converter' element={<ExcelToWordConverter/>}></Route>
    <Route path='form' element></Route>  
      </Routes>
    </Router>
  );
}

function Home(){
  const navigate = useNavigate()
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>APP</title>
      </head>

      <body>
        <div className="container-form sign-up">
          <div className="welcome-back">
            <div className="message">
              <h2>Bienvenido</h2>
              <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
              <button onClick={() => {navigate("/converter")}} className="sign-up-btn">
                Iniciar Sesion
              </button>
            </div>
          </div>
          <form className="formulario">
            <h2 className="create-account">Crear una cuenta</h2>
            <div className="iconos">
              <div className="border-icon">
                <i className="bx bxl-instagram"></i>
              </div>
              <div className="border-icon">
                <i className="bx bxl-linkedin"></i>
              </div>
              <div className="border-icon">
                <i className="bx bxl-facebook-circle"></i>
              </div>
            </div>
            <p className="cuenta-gratis">Crear una cuenta gratis</p>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <input type="button" value="Registrarse" />
          </form>
        </div>
        <div className="container-form sign-in">
          <form className="formulario">
            <h2 className="create-account">Iniciar Sesion</h2>
            <div className="iconos">
              <div className="border-icon">
                <i className="bx bxl-instagram"></i>
              </div>
              <div className="border-icon">
                <i className="bx bxl-linkedin"></i>
              </div>
              <div className="border-icon">
                <i className="bx bxl-facebook-circle"></i>
              </div>
            </div>
            <p className="cuenta-gratis">¿Aun no tienes una cuenta?</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <input type="button" value="Iniciar Sesion" />
          </form>
          <div className="welcome-back">
            <div className="message">
              <h2>Bienvenido de nuevo</h2>
              <p>Si aun no tienes una cuenta por favor registrese aqui</p>
              <button className="sign-in-btn">Registrarse</button>
            </div>
          </div>
        </div>
        <script src="js/script.js"></script>
      </body>
    </>
  )
}

export default App;