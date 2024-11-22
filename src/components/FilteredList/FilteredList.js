import React from 'react';

const FilteredList = ({ items, searchText }) => {
  const filteredItems = searchText
    ? items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
    : items;

  // Si solo hay un resultado, aplicamos una clase CSS extra para centrar
  const isSingleItem = filteredItems.length === 1;

  return (
    <div className={`filtered-list ${isSingleItem ? 'single-item' : ''}`}>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.name}  />
            <h2>{item.name}</h2>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};

export default FilteredList;
