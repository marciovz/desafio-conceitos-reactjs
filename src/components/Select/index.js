import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";

import './styles.css';

export default function Select({multiple, onChange, value, placeholder, children }) {
  const [active, setActive] = useState(false);

  function handleMouseClick() {
    setActive(true);
  }
  function handleMouseLeave() {
    setActive(false);
  }
  
  function handleChangeSelect(e){
    onChange(e.target.value);
  }

  return (
    <div
      className={`selectContainer ${active ? "active": "" } `}
      onClick={handleMouseClick}
    >
      <p>{placeholder}</p>
      <FiChevronDown />
      <select 
        placeholder="Techs"
        multiple={multiple}  
        value={value}
        onMouseLeave={handleMouseLeave}
        onChange={ (e) => handleChangeSelect(e) }
      >
        {children}
      </select>
    </div>
  );
  
}