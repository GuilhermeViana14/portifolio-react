import Navbar from './Navbar';
import Sobremim from './sobre-mim';
import Curriculo from './curriculo';
import Projetos from './projetos';
import './css/App.css';

function App() {
  return (
    <html>
      <body>
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
          />
          
          <Navbar />

          <header>
            <h1 className='titulo'>Guilherme<br />viana</h1>
            <h2 className="sub-titulo">Redes Sociais:</h2>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/gui.viana14/?next=%2F" 
                className="icon-link" 
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/guilherme-viana-filgueiras-4b5211234/" 
                className="icon-link" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com/GuilhermeViana14" 
                className="icon-link" 
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </header>
          
          <Sobremim /> 
          <Curriculo /> 
          
          <footer><Projetos /></footer>
        </body>
    </html>
  );
}

export default App;
