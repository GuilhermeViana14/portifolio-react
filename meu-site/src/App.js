import React, { useEffect, useRef } from 'react';
import Intro from './intro';
import Navbar from './Navbar';
import Sobremim from './sobre-mim';
import Curriculo from './curriculo';
import Contato from './contato';

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
          <Curriculo/>
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
