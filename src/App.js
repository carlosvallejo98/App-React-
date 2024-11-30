import React, { useState } from 'react';
import FilteredList from './components/FilteredList/FilteredList';
import SearchBox from './components/SearchBox/SearchBox';


const App = () => {
  const [serchText, setSearchText] = useState('');

  const items = [
    { name: 'The Witcher', image: `${process.env.PUBLIC_URL}/img/the-witcher.jpg` },
    { name: 'Sex Education', image: `${process.env.PUBLIC_URL}/img/club-de-cuervos.webp` },
    { name: 'Suits', image: `${process.env.PUBLIC_URL}/img/suits.webp` },
    { name: 'La Casa De Papel', image: `${process.env.PUBLIC_URL}/img/la-casa-de-papel.webp` },
    { name: 'Stranger Things', image: `${process.env.PUBLIC_URL}/img/sex-education.jpg` }, 
    { name: 'Outer Banks', image: `${process.env.PUBLIC_URL}/img/outer-banks.webp` },
    { name: 'Club De Cuervos', image: `${process.env.PUBLIC_URL}/img/stranger-things.jpg` }, 
    { name: 'The Walking Dead', image: `${process.env.PUBLIC_URL}/img/the-walking.webp` }
  ];

  return (
    <>
      <h1>Busca Tu Serie Favorita</h1>
      <SearchBox onSearch={(text) => setSearchText(text)} />
      <FilteredList items={items} serchText={serchText} />
    </>
  );
};

export default App;
