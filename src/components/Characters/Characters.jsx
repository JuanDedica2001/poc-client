import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../graphql/hooks/useCharacters';
import styles from './character.module.css';


export const Characters = () => {
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters(page);

  if (loading) return <p className={styles.loading}>Loading...</p>  
  
  return (
    <main>
      <div className={styles.container}>
      {characters.map(character => (
        <Link key={character.id} to={'character/' + character.id}>
          <div className='card'>
              <img src={character.image} alt="" />
              <h2>{character.name}</h2>
          </div> 
        </Link>
        ))}
      </div>
      {
        page !== 0 && <button onClick={() => setPage(page - 1)}>Previous</button>
      }
      <button onClick={() => setPage(page + 1)}>Next</button>
      </main>
  )
}
