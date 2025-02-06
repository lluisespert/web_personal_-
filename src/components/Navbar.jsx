import React from "react";
import { Link } from "react-router";

const Navbar = () => {

    return (

       <div className="vh-100 d-flex align-items-center position-fixed start-0 top-0" role="navigation">

        <div className="p-2">

          <div id="mainNav">

            <ul className="list-unstyled rounded ms-2">

              <li><Link className="vlink rounded p-2" to="/"><i className="fas fa-home"></i> <span>Inicio</span></Link></li>

              <li><Link className="vlink rounded p-2" to="/quien-soy"><i className="fas fa-user"></i> <span>¿Quien soy?</span></Link></li>

              <li><Link className="vlink rounded p-2" to="/formacion"><i className="fa-solid fa-user-pen"></i> <span>Formación</span></Link></li>

              <li><Link className="vlink rounded p-2" to=""><i className="fa-solid fa-user-plus"></i> <span>Experiencia Profesional</span></Link></li>

              <li><Link className="vlink rounded" to="#"><i className="fas fa-user-circle"></i> <span>Contacta commigo</span></Link></li>

            </ul>

          </div>

        </div>

      </div>

    )

}
export default Navbar;  