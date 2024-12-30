import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
        <div className="footer">
            <div className="footerColumsContainer">
                <div className="footer-column colum1">
                    <h3>global <span>fitness</span></h3>
                    <ul>
                        <li>celular: 3813334455</li>
                        <li>email: global@fitness.com</li>
                        <li>dirección: balcarce 1050 - alderetes</li>
                    </ul>
                </div>
                <div className="footer-column colum2">
                    <h3>Servicios</h3>
                    <ul>
                        <li>Entrenamiento Personal</li>
                        <li>Clases Grupales</li>
                        <li>Nutrición</li>
                    </ul>
                </div>
                <div className="footer-column colum3">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaYoutube />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

