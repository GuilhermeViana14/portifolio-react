import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll'; // Importar apenas o Link

import './css/Navbar.css';
import './css/logo_navbar.css';

const Navbar = () => {
    const [hidden, setHidden] = useState(false); // Começa visível

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;

        // Esconde a navbar ao rolar para baixo e mostra ao voltar ao topo
        if (scrollY === 0) {
            setHidden(false); // Mostra a navbar quando está no topo
        } else {
            setHidden(true); // Esconde a navbar quando não está no topo
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Chama handleScroll para definir o estado inicial da navbar
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
            <div className="container">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="sobre-mim-section" smooth={true} duration={500}>
                        Sobre Mim
                    </Link>
                </li>
                <li>
                    <Link to="Curriculo-section" smooth={true} duration={500}>
                        Currículo
                    </Link>
                </li>
                <li>
                    <Link to="Contato-section" smooth={true} duration={500}>
                        Entre em Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
