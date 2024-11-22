import React, { useState } from 'react';
import FilteredList from './components/FilteredList/FilteredList';
import SearchBox from './components/SearchBox/SearchBox';
import './components/index.css';

// Asegúrate de que las imágenes existan y las rutas sean correctas !!!!
import theWitcherImage from './assets/the-witcher.jpg';
import sexEducationImage from './assets/sex-education.jpg';
import suitsImage from './assets/suits.webp';
import walkingDeadImage from './assets/the-walking.webp';
import strangerThingsImage from './assets/stranger-things.jpg'; 
import outerBanksImage from './assets/outer-banks.webp';
import clubDeCuervosImage from './assets/club-de-cuervos.webp'; 
import laCasaDePapel from './assets/la-casa-de-papel.webp';

const App = () => {
  const [searchText, setSearchText] = useState(''); // Inicializa vacío

  const items = [
    { name : 'The Witcher', image: theWitcherImage },
    { name: 'Sex Education', image: sexEducationImage },
    { name: 'Suits', image: suitsImage },
    { name: 'The Walking Dead', image: walkingDeadImage },
    { name: 'Stranger Things', image: strangerThingsImage },
    { name: 'Outer Banks', image: outerBanksImage },
    { name: 'Club De Cuervos', image: clubDeCuervosImage },
    { name:'La Casa De Papel ' , image:laCasaDePapel}
  ];

  return (
    <>
      <h1>Busca Tu Serie Favorita</h1>
      <SearchBox onSearch={(text) => setSearchText(text)} />
      <FilteredList items={items} searchText={searchText} />
        
      
    </>
  );
};

export default App;
