import { useState } from 'react';

export const SearchCharacter = () => {
  
  const [search, setSearch] = useState('');
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        onChange={handleChange} 
        value={search}
        placeholder='Search for a character'
      />
      <button>Go!</button>
    </form>
  )
}
