import { searchMovies } from 'servis/API';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const useFetchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    if (!query) return;
    searchMovie(query);},
     [searchParams, query]);

    
    const searchMovie = async query => {
        setIsLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
  return { movies, error, isLoading, setSearchParams };
};

export default useFetchMovie;
