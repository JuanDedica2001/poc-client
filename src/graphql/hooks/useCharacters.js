import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries';

export const useCharacters = (page = 1, filter) => {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page, filter },
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [loading, data]);

  return {
    characters,
    loading,
    error
  }
}