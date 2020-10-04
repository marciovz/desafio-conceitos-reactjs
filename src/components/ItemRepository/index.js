import React from 'react';
import './styles.css';

const ItemRepository = ({ repository, handleRemoveRepository }) => {

  return(
    <li className="itemList">
      <p>{repository.id}</p>
      <p>{repository.title}</p>
      <p>{repository.url}</p>
      <p>{repository.techs.join(', ')}</p>
      <button data-testid="btnRemoveItem" onClick={() => handleRemoveRepository(repository.id)}>X</button>            
  </li>
  );


}

export default ItemRepository;