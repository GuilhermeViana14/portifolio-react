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
                    
                        Tenho um forte interesse em desenvolvimento web e estou constantemente em busca de novas tecnologias para expandir minhas habilidades.<br></br><br></br><br></br> Além disso, como hobby, sou apaixonado por jogos, sem me limitar a um único gênero; na verdade, gosto de explorar a maioria deles, o que enriquece minha criatividade e perspectiva.
                    </p>
                    <img src="pc-interesse.png" alt="Descrição da Imagem" className="imagem-card-sobremim" />
                </div>
                <div className="card-sobremim">
                    <span className='card-sobremim-span'>Obejtivos !</span>
                    <p className="info">
                    Meu objetivo de vida é me tornar um desenvolvedor full stack, criando soluções inovadoras que melhorem a experiência do usuário na web e em jogos. Estou comprometido em aprimorar minhas<br></br><br></br> <br></br> habilidades e acompanhar as tendências do mercado, unindo minha paixão por tecnologia e entretenimento para desenvolver experiências imersivas e memoráveis.
                    </p>
                    <img src="objetivos.png" alt="Descrição da Imagem" className="imagem-card-sobremim" />
                </div>
            </div>   
        </>
        
    
    );
};

export default Sobremim;
