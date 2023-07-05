import { getTrending } from 'servis/API';
import { useState, useEffect } from 'react';


const useFetchMovies = () => {

    const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  
  useEffect(() => {
setIsLoading(true);
const fetchData = async () => {
  try {
    const data = await getTrending();
    setMovies(data.results);
   
   
  } catch (error) {
    setError(error.message);
 } finally {
  setIsLoading(false);
 }
};
fetchData();
  }, []);
return {movies, error, isLoading}

};

  
 export default useFetchMovies;
 
