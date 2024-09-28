import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/projetos.css'; // Estilos para os projetos

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    // Função para buscar os dados dos projetos da API
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projetos');
        setProjetos(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  return (
    <div className="projetos-container">
      <h2>Meus Projetos</h2>
      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.id}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <img src={projeto.imagem} alt={projeto.nome} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projetos;
