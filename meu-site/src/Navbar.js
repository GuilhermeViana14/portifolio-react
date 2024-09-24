import React from 'react';
import './css/Navbar.css';
import './css/logo_navbar.css';
const Navbar = () => {
    return (
        
        <nav className="navbar"> 
            <div class="container">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul className="nav-links">
                <li><a href="#sobre-mim-section">Sobre Mim</a></li>
                <li><a href="#curiosidades">Curiosidades</a></li>
                <li><a href="#Curriculo">Currículo</a></li>
                <li><a href="mailto:guilhermevianafilgueiras@gmail.com?subject=Contato%20pelo%20site&body=Olá%2C%20Gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA.%20Por%20favor%20responda%20a%20esta%20mensagem.">Entre em Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
