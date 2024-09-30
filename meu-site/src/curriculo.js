import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // para o PostgreSQL
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

    const getInfo = () => {
        switch (selectedOption) {
            case 'html':
                return (
                    <p>
                        HTM é a base da estrutura de qualquer página da web, e eu tenho uma sólida experiência em sua utilização. Sei como criar e organizar o conteúdo usando tags semânticas, como header, section, article, footer, garantindo que as páginas sejam bem estruturadas e acessíveis.<br></br><br></br><br></br> Também domino o uso de elementos como div, span, img, formulários com input e textarea, e a inserção de links e mídias externas. Com HTML, consigo transformar designs em páginas funcionais e adaptáveis, preparando-as para estilização com CSS e interação com JavaScript.
                    </p>
                );
            case 'css':
                return (
                    <p>
                        CSS é essencial para estilizar páginas web, e eu tenho uma vasta experiência em utilizá-lo para criar layouts responsivos e atraentes. Sei trabalhar com posicionamento de elementos usando flexbox e grid, além de aplicar animações, transições e efeitos visuais avançados.<br></br><br></br><br></br> Compreendo a importância da hierarquia de estilos e como usar classes, IDs e pseudo-classes para estilizar componentes de forma eficiente. Também tenho experiência em criar designs adaptáveis para diferentes dispositivos, garantindo uma excelente experiência de usuário tanto em desktops quanto em dispositivos móveis.
                    </p>
                );
            case 'javascript':
                return (
                    <p>
                        JavaScript é a linguagem que traz interatividade e dinamismo às páginas web, e eu utilizo amplamente seus recursos para criar experiências ricas e funcionais. Tenho conhecimento em manipulação do DOM, permitindo criar, remover ou alterar elementos dinamicamente. <br></br><br></br><br></br>Também sei utilizar eventos como cliques e scrolls para interagir com o usuário. Além disso, domino funções assíncronas com promises e async/await, permitindo manipular dados de APIs e integrar sistemas externos. Seja para validação de formulários, animações interativas ou controle de dados, o JavaScript é uma ferramenta poderosa que utilizo para tornar as interfaces mais dinâmicas e responsivas.
                    </p>
                );
            case 'python':
                return (
                    <p>
                        Python é uma linguagem versátil que utilizo tanto para desenvolvimento web quanto para automação de processos. Já trabalhei com FastAPI e um pouco de Django para criar APIs e sistemas robustos, além de utilizar bibliotecas como Pandas para manipulação de dados.<br></br><br></br><br></br> Também tenho experiência com computação gráfica, utilizando Python para desenvolver projetos nessa área. Python é minha escolha para resolver problemas complexos de forma rápida e eficiente, seja para automação de processos, análise de dados ou desenvolvimento de sistemas web.
                    </p>
                );
            case 'react':
                return (
                    <p>
                        React é a biblioteca que utilizo para desenvolver interfaces de usuário modernas e dinâmicas. Através do conceito de componentes reutilizáveis, consigo criar aplicações escaláveis e com ótimo desempenho.<br></br><br></br><br></br>  Tenho experiência com o uso de Hooks como useState e useEffect para gerenciar estado e efeitos colaterais, além de trabalhar com React Router para navegação e Axios para comunicação com APIs. O React me permite criar aplicações interativas e responsivas, oferecendo uma excelente experiência de usuário.
                    </p>
                );
            case 'postgresql':
                return (
                    <p>
                        Com PostgreSQL, utilizo o pgAdmin como ferramenta principal para gerenciar bancos de dados, criar consultas e monitorar o desempenho. Já integrei PostgreSQL com Python e JavaScript em vários projetos, onde desenvolvi APIs simples para manipulação de dados e persistência de informações.<br></br><br></br><br></br>  A combinação de PostgreSQL com essas linguagens me permitiu criar sistemas eficientes e escaláveis, aproveitando as vantagens de um banco de dados robusto e seguro.
                    </p>
                );
            default:
                return <p>Selecione uma linguagem para ver as informações.</p>;
        }
    };

    return (
        <>
        <div className="container-curriculo">
            <legend className="title">Hard skills</legend>
            
            <label htmlFor="html" className="option" onClick={handleOptionChange}>
                <FontAwesomeIcon icon={faHtml5} className="icon" />
                <div className="icon"> HTML</div>
                <input type="radio" name="status" className="input" id="html" />
            </label>
            
            <label htmlFor="css" className="option" onClick={handleOptionChange}>
                <FontAwesomeIcon icon={faCss3Alt} className="icon" />
                <div className="icon"> CSS</div>
                <input type="radio" name="status" className="input" id="css" />
            </label>
            
            <label htmlFor="javascript" className="option" onClick={handleOptionChange}>
                <FontAwesomeIcon icon={faJs} className="icon" />
                <div className="icon"> JavaScript</div>
                <input type="radio" name="status" className="input" id="javascript" />
            </label>

            <label htmlFor="python" className="option" onClick={handleOptionChange}>
                <FontAwesomeIcon icon={faPython} className="icon" />
                <div className="icon"> Python</div>
                <input type="radio" name="status" className="input" id="python" />
            </label>

            <label htmlFor="react" className="option" onClick={handleOptionChange}>
                <FontAwesomeIcon icon={faReact} className="icon" />
                <div className="icon"> React</div>
                <input type="radio" name="status" className="input" id="react" />
            </label>

            <label htmlFor="postgresql" className="option" onClick={handleOptionChange}>
                <FontAwesomeIcon icon={faDatabase} className="icon" />
                <div className="icon"> PostgreSQL</div>
                <input type="radio" name="status" className="input" id="postgresql" />
            </label>
            
        </div>
        
        <div className='info-container'>
            <div className={`info-card ${isAnimating ? 'dynamic-out' : 'dynamic-in'}`}>
                <div className="info-text">{getInfo()}</div> 
            </div>
        </div>
    
    </>           
    );
};

export default Curriculo;
