import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">
                {/* Botón de toggle para pantallas pequeñas */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menú de navegación */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-home"></i> <span>Inicio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quien-soy">
                                <i className="fas fa-user"></i> <span>¿Quién soy?</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/formacion">
                                <i className="fa-solid fa-user-pen"></i> <span>Formación</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">
                                <i className="fa-solid fa-user-plus"></i> <span>Experiencia Profesional</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <i className="fas fa-user-circle"></i> <span>Contacta conmigo</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;