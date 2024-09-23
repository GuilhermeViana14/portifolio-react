import Navbar from './Navbar';
import './App.css';
import Sobremim from './sobre-mim';
import Currículo from './curriculo';
import Terra from './terra';
function App() {
  return (
  <div >
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
    <Navbar /> {/* Incluindo a Navbar */}

    <header className='titulo'>
      <h1>Guilherme<br></br>  viana</h1>
    </header>
    
    <div className="sub-titulo">
      <p>Redes Sociais:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/gui.viana14/?next=%2F" className="icon-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/guilherme-viana-filgueiras-4b5211234/" className="icon-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/GuilhermeViana14" className="icon-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
      </div>
    </div>

    <Sobremim /> {/* Incluindo sobremim */}

    <Currículo /> {/* Incluindo Curriculo */}

    <Terra /> {/* Incluindo terra */}





  </div>
  );
}

export default App;
