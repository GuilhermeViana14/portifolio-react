import React from 'react';
import './css/sobre-mim.css';

const Sobremim = () => {
    return (
        
        <>
            <h1 className='titulo-sobremim'>Conheça mais Sobre mim</h1>
            <div className="container-sobremim"> 
                <div className="card-sobremim">
                    <span className='card-sobremim-span'>Quem sou eu ?</span>
                    <p className="info">
                        Meu nome é Guilherme Viana e minha paixão por tecnologia começou cedo, especialmente com jogos, que despertaram meu interesse em seguir uma carreira na área de TI.
                        <br/><br/><br/> 
                        Foi esse fascínio que me levou a escolher o curso de Ciência da Computação, onde posso aprofundar meus conhecimentos e trabalhar com aquilo que mais me motiva.
                    </p>
    
                    <img src="avatar.png" alt="Descrição da Imagem" className="imagem-card-sobremim" />
                </div>

                <div className="card-sobremim">
                    <span className='card-sobremim-span'>Interesses</span>
                    <p className="info">
                        Tenho um forte interesse em desenvolvimento web, inteligência artificial e automação. Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.
                        <br/><br/>
                        Acredito que a tecnologia pode ser uma força transformadora e estou animado para fazer parte dessa evolução.
                    </p>
                    <img src="pc-interesse.png" alt="Descrição da Imagem" className="imagem-card-sobremim" />
                </div>
                <div className="card-sobremim">
                    <span className='card-sobremim-span'>Obejtivos !</span>
                    <p className="info">
                        Tenho um forte interesse em desenvolvimento web, inteligência artificial e automação. Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.
                        <br/><br/>
                        Acredito que a tecnologia pode ser uma força transformadora e estou animado para fazer parte dessa evolução.
                    </p>
                    <img src="objetivos.png" alt="Descrição da Imagem" className="imagem-card-sobremim" />
                </div>
            </div>   
        </>
        
    
    );
};

export default Sobremim;
