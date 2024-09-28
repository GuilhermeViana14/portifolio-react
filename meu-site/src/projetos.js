import React from 'react';
import './css/projetos.css'; // Estilos para os projetos

const Projetos = () => {
  // Dados estáticos dos projetos
  const projetos = [
    {
      id: 1,
      nome: 'Mobile app',
      descricao: 'App para organizar rotina Link:https://github.com/GuilhermeViana14/Organizador-de-tarefas',
      imagem: '/caminho/para/imagem1.jpg', // Substitua pelo caminho da sua imagem
    },
    {
      id: 2,
      nome: 'Projeto 2',
      descricao: 'Descrição do Projeto 2',
      imagem: '/caminho/para/imagem2.jpg', // Substitua pelo caminho da sua imagem
    },
    {
      id: 3,
      nome: 'Projeto 3',
      descricao: 'Descrição do Projeto 3',
      imagem: '/caminho/para/imagem3.jpg', // Substitua pelo caminho da sua imagem
    },
  ];

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
