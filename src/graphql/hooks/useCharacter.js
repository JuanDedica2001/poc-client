import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_CHARACTER_BY_ID } from '../queries';


export const useCharacter = (ids) => {
  const [character, setCharacter] = useState({})
  const { data, loading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { ids },
  })

  useEffect(() => {
    if (data) {
      setCharacter(data.charactersByIds[0])
    }
  }, [loading, data])

  return {
    character, 
    loading
  }
}