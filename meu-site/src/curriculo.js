import React, { useState } from 'react';
import './css/curriculo.css';

const Curriculo = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleOptionChange = (event) => {
        setIsAnimating(true); 
        setTimeout(() => {
            setSelectedOption(event.target.id);
            setIsAnimating(false); 
        }, 500);
    };

    const getImage = () => {
        switch (selectedOption) {
            case 'html':
                return "html.jpg";  // Insira o caminho correto da imagem HTML
            case 'css':
                return "css.jpg";   // Insira o caminho correto da imagem CSS
            case 'javascript':
                return "js.jpg";    // Insira o caminho correto da imagem JavaScript
            default:
                return null;  // Caso nenhuma linguagem tenha sido selecionada
        }
    };

    const getInfo = () => {
        switch (selectedOption) {
            case 'html':
                return (
                    <p>
                        <strong>Eu sei criar a estrutura de uma página utilizando tags como html, head, body e outras que definem o conteúdo da página, como header, footer, section, e article. Também entendo o papel dos elementos semânticos, que ajudam a melhorar a acessibilidade e SEO.<br></br><br></br>Além disso, estou familiarizado com o uso de listas, como ul e ol, e como incorporar links através da tag a. Sei incluir imagens com a tag img, além de trabalhar com formulários usando form, input, textarea, e button, compreendendo bem a importância de cada tipo de campo e como configurá-los."</strong> 
                    </p>
                );
            case 'css':
                return (
                    <p>
                        <strong>Eu sei criar e aplicar estilos a uma página web utilizando CSS. Entendo como definir cores, tamanhos, espaçamentos e outros aspectos visuais dos elementos HTML, usando propriedades como color, font-size, margin, padding, border e background. Compreendo também como usar seletores ID, classe e pseudo-classes para estilizar de forma específica partes de um documento.<br></br><br></br>Além disso, tenho conhecimento sobre o conceito de modelo de caixa (box model), que define como o conteúdo, padding, borda e margem de um elemento interagem. Também sei trabalhar com posicionamento de elementos utilizando propriedades como position, display, float e flexbox, permitindo uma organização mais fluida e responsiva do layout.</strong> 
                    </p>
                );
            case 'javascript':
                return (
                    <p>
                        <strong>Eu utilizo JavaScript para adicionar interatividade às páginas web, manipulando o DOM para alterar elementos em tempo real e respondendo a eventos do usuário. Tenho experiência com variáveis, estruturas condicionais, loops, e funções, incluindo arrow functions e funções assíncronas com promises.<br></br><br></br> capaz de fazer requisições assíncronas usando AJAX e APIs, além de trabalhar com event listeners para interações do usuário. Entendo conceitos como closures, hoisting, e escopo de variáveis, e tenho experiência com JavaScript moderno (ES6), incluindo desestruturação, template literals, e módulos, tornando meu código mais legível e organizado.</strong> 
                    </p>
                );
            default:
                return <p>Selecione uma linguagem para ver as informações.</p>;
        }
    };

    return (
        <div className="container-curriculo">
            <legend className="title">Conhecimento em Programação</legend>
            
            <label htmlFor="html" className="option" onClick={handleOptionChange}>
                <div className="icon">  HTML</div>
                <input type="radio" name="status" className="input" id="html" />
            </label>
            
            <label htmlFor="css" className="option" onClick={handleOptionChange}>
                <div className="icon"> CSS</div>
                <input type="radio" name="status" className="input" id="css" />
            </label>
            
            <label htmlFor="javascript" className="option" onClick={handleOptionChange}>
                <div className="icon">  JavaScript</div>
                <input type="radio" name="status" className="input" id="javascript" />
            </label>
            
            <div className={`info-card ${isAnimating ? 'dynamic-out' : 'dynamic-in'}`}>
                <div className="info-text">{getInfo()}</div> 
                {getImage() && <img src={getImage()} alt="Imagem da linguagem" />} 
            </div>
        </div>
    );
};

export default Curriculo;
