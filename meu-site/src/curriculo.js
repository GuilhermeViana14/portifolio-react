import React, { useState } from 'react';
import './css/curriculo.css';

const Curriculo = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isAnimating, setIsAnimating] = useState(false); // Novo estado para animação

    const handleOptionChange = (event) => {
        setIsAnimating(true); // Inicia a animação de saída
        setTimeout(() => {
            setSelectedOption(event.target.id);
            setIsAnimating(false); // Inicia a animação de entrada após a troca
        }, 500); // Tempo da animação de saída
    };

    const getInfo = () => {
        switch (selectedOption) {
            case 'html':
                return "Informações sobre HTML.";
            case 'css':
                return "Informações sobre CSS.";
            case 'javascript':
                return "Informações sobre JavaScript.";
            default:
                return "Selecione uma linguagem para ver as informações.";
        }
    };

    return (
        <div className="container-curriculo">
            <legend className="title">Conhecimento em Programação</legend>
            
            <label htmlFor="html" className="option" onClick={handleOptionChange}>
                <div className="icon"> {/* Ícone do HTML aqui */} HTML</div>
                <input type="radio" name="status" className="input" id="html" />
            </label>
            
            <label htmlFor="css" className="option" onClick={handleOptionChange}>
                <div className="icon"> {/* Ícone do CSS aqui */} CSS</div>
                <input type="radio" name="status" className="input" id="css" />
            </label>
            
            <label htmlFor="javascript" className="option" onClick={handleOptionChange}>
                <div className="icon"> {/* Ícone do JavaScript aqui */} JavaScript</div>
                <input type="radio" name="status" className="input" id="javascript" />
            </label>
            
            {/* Card com informações sobre a linguagem selecionada */}
            <div className={`info-card ${isAnimating ? 'dynamic-out' : 'dynamic-in'}`}>
                {getInfo()}
            </div>
        </div>
    );
};

export default Curriculo;
