import React, { useState } from 'react';


const SearchBox = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      onSearch(value); // Llama a la función de búsqueda automáticamente
    };
  
    return (
      <div className='serch'>
        <input
          type="text"
          placeholder="Buscar..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={() => onSearch(inputValue)}>Buscar</button>
      </div>
    );
  };
  
  export default SearchBox;

