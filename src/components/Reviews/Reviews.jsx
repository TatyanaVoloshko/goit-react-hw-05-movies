import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'servis/API';

function Reviews() {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [reviews, setReviews] = useState([]);
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </li>
  ));
  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const chosenMovie = await getMovieReviews(movieId);
        setReviews(chosenMovie.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
    {error && <p>Oops...Somesing went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      <ul>{elements}</ul>;
    </>
 
  )
  
}

export default Reviews;
