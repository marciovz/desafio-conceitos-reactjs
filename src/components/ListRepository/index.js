import React from 'react';
import ItemRepository from '../ItemRepository';
import './style.css';

const ListRepository = ({ repositories, handleRemoveRepository }) =>{


    return (
      <div className="containerList">
        <h1>Repositórios</h1>
        <div className="titleList">
          <p>ID</p>
          <p>Título</p>
          <p>URL</p>
          <p>Tecnologias</p>
          <p></p>
        </div>

        <ul data-testid="repository-list">
          {repositories.map(repository => (
            <ItemRepository 
              key={repository.id} 
              repository={repository} 
              handleRemoveRepository={() => handleRemoveRepository(repository.id)}
            />
          ))}
        </ul>
        
      </div>
    );
}

export default ListRepository;