import React, { useState, useEffect } from "react";
import FormAddRepositry from './components/FormAddRepository';
import ListRepository from './components/ListRepository';
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  },[]);

  async function handleAddRepository({  title, url, techs }) {
    const response = await api.post('repositories', {
      title,
      url,
      techs,
    });
    setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);
    const repoFilter = repositories.filter(repository => repository.id !== id);
    setRepositories(repoFilter);
  }

  return (
    <div className="container">
      <FormAddRepositry addRepository={handleAddRepository}/>
      <ListRepository 
        repositories={repositories} 
        handleRemoveRepository={handleRemoveRepository} 
      />      
    </div>
  );
}

export default App;
