import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries';

export const useCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
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
  }}