import React from 'react';
import projetos from '../data/projetos'

function Projetos() {

  if (!projetos.length) return <h3>Carregando...</h3>

  return (
    <div>
        {projetos.map((item, index) => (
            <div key={index + 1}>
                <a href={item.link} target="_blank">
                <h1>{item.name}</h1>
                </a>
            </div>
        ))}
    </div>
  );
}

export default Projetos;
