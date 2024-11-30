import React from 'react';
import  './style.css';


const FilteredList = ({ items, serchText }) => {
 const filteredItems = serchText 
    ?items.filter(item => item.name.toLowerCase().includes(serchText.toLowerCase()))
    :items;

    return (
      <div className='lista-visible'>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}


export default FilteredList ;