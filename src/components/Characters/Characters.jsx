import { useState } from 'react';
import { useCharacters } from '../../graphql/hooks/useCharacters';
import styles from './character.module.css';


export const Characters = () => {
  const [page, setPage] = useState(1);
  const { characters, error, loading } = useCharacters(page);
  
  if (loading) return <p className='characters__loading'>Loading...</p>  
  
  return (
    <main>
      <div className={styles.container}>
      {characters.map(character => (
        <div className='card__container' key={character.id}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
        </div> 
        ))}
      </div>
      {
        page !== 0 && <button onClick={() => setPage(page - 1)}>Previous</button>
      }
      <button onClick={() => setPage(page + 1)}>Next</button>
      </main>
  )
}
