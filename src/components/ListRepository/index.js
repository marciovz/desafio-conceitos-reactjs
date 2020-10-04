import React from 'react';
import ItemRepository from '../ItemRepository';
import './style.css';

const ListRepository = ({ repositories, handleRemoveRepository }) =>{


    return (
      <ul data-testid="repository-list" className="containerList">
        <h1>Repositórios</h1>
        <li className="titleList">
          <p>ID</p>
          <p>Título</p>
          <p>URL</p>
          <p>Tecnologias</p>
          <p></p>
        </li>

        {repositories.map(repository => (
          <ItemRepository 
            key={repository.id} 
            repository={repository} 
            handleRemoveRepository={() => handleRemoveRepository(repository.id)}
          />
        ))}
        
      </ul>
    );
}

export default ListRepository;