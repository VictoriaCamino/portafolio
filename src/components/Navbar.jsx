import React from 'react'
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <a className="navbar-brand navbar-logo" href="#">Victoria Camino</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff" }}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#skills">Habilidades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#proyectos">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sobreMi">Sobre mí</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
