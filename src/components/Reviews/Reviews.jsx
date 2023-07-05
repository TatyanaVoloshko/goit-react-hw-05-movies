import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'servis/API';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </li>
  ));
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const chosenMovie = await getMovieReviews(movieId);
        setReviews(chosenMovie.data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovie();
  }, [movieId]);
  return <ul>{elements}</ul>;
}

export default Reviews;
