import React, {useState} from 'react';

import Select from '../Select';
import './styles.css';

export default function FormAddRepository ({addRepository}) {
  const [title, setTitle ] = useState("");
  const [url, setUrl ] = useState("");
  const [techs, setTechs ] = useState([]);

  function handleAddRepository(e) {
    e.preventDefault();
    addRepository({title, url, techs });
    setTitle("");
    setUrl("");
    setTechs([]);
  }

  function handleChangeOptions(techClicked) {
    const findItemInList = techs.find(item => item === techClicked);

    if(!findItemInList) {
      setTechs([...techs, techClicked])
    }else{
      setTechs(techs.filter(item => item !== techClicked));
    }
  }

  return (
    <form>
      <h1>Novo repositório</h1>
      <div className="inputsContainer">
        <input 
          id="title"
          type="text"
          placeholder="Título"
          onChange={ (e) => setTitle(e.target.value) } 
          value={title}
        />
        <input 
          id="url" 
          type="text" 
          placeholder="URL"
          onChange={ (e) => setUrl(e.target.value) } 
          value={url}
        />
        <Select 
          placeholder="Techs"
          multiple="multiple"  
          value={techs}
          onChange={ handleChangeOptions }
        >
            <option value="NodeJS">NodeJS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="ReactJS">ReactJS</option>
            <option value="React Native">React Native</option>
        </Select>

        <button 
          type="text" 
          onClick={(e) => handleAddRepository(e)}
        >
          Adicionar
        </button>
      </div>

    </form>
  );
}

