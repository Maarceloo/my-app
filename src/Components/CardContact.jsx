import React from 'react';
import contact from '../data/contact'

function CardContact() {

  if (!contact.length) return <h3>Carregando...</h3>

  return (
    <div>
        {contact.map((item, index) => (
            <div key={index + 1}>
                <a href={item.link} target="_blank">
                <img className='contactImg' src={item.img} alt={index}/>
                </a>
            </div>
        ))}
    </div>
  );
}

export default CardContact;
