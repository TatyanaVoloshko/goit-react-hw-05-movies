import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

const MoviesList = ({ movies }) => {
 
  const location = useLocation();

  return (
    <>
      {movies.length > 0 &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} 
            state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default MoviesList;

MoviesList.propTypers = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      }).isRequired
  ).isRequired,
};