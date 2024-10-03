import React, { useEffect, useRef } from 'react';
import Intro from './componentes/intro'
import Navbar from './componentes/Navbar';
import Sobremim from './componentes/sobre-mim';
import HardSkills from './componentes/HardSkills';
import Contato from './componentes/contato';
import SoftSkills from './componentes/SoftSkills';

import './css/App.css';
import './css/intro.css';


function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Erro ao reproduzir o vídeo: ', error);
      });
    }
  }, []);
  
  
  
  return (
    <>
    
        <body>
          
            
            <Navbar />

            <header>
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="video-bg"
              >
                <source src="background2.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
              
              <div className="overlay"></div>
              
              <Intro />
            
            </header>
          
          <section id="sobre-mim-section">
          <Sobremim/>
          </section>
            
          <section id="Curriculo-section">
          <SoftSkills/>
          <HardSkills/>
          </section>
          
          </body>
          <footer>
          <section id="Contato-section">
          <Contato/>
          </section>
          <div className="footer-overlay"></div>
          </footer>
    </>
    
  );
}

export default App;
