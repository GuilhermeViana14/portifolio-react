import logo from './logo.svg';
import './App.css';

function App() {
  
  
  
  const stars = Array.from({ length: 100 }).map((_, index) => {
    const left = Math.random() * 100; 
    const top = Math.random() * 100; 
    const size = Math.random() * 3 + 1; 
    return (
      <div
        key={index}
        className="star"
        style={{
          left: `${left}vw`,
          top: `${top}vh`,
          width: `${size}vw`, 
          height: `${size}vw`, 
        }}
      />
    );
  });
}

export default App;
