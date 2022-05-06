import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../../graphql/hooks/useCharacter';

export const CharactersInfo = () => {
  const {id} = useParams();
  const {character, loading} = useCharacter(Number(id));;
  if (loading) return <p>Loading...</p>
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt="" />
      <p>{character.species}</p>
      <p>{character.status}</p>
      <p>{character.gender}</p>
    </div>
  )
}
