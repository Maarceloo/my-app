import React from 'react';
import skills from '../data/skills';

function CardSkills() {

  if (!skills.length) return <h3>Carregando...</h3>

  return (
    <div>
        {skills.map((item, index) => (
            <div key={index + 1}>
                <img className='cardImg' src={item.link} alt={index}/>
                <h5 >{item.texto}</h5>
            </div>
        ))}
    </div>
  );
}

export default CardSkills;
