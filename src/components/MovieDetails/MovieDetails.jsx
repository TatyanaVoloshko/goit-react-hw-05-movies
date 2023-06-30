import {
    useParams,
    Outlet,
    Link,
    useNavigate,
    useLocation,
  } from 'react-router-dom';
  import { useState, useEffect, useCallback } from 'react';
  import { getMovieById } from 'servis/API';
  import css from './MovieDetails.module.css'

function MovieDetails () {
    const [movie, setMovie] = useState({});
    const [year, setYear] = useState();
    const { movieId } = useParams();
    const { backdrop_path, id, title, overview, genres } = movie;
    const genresArray = genres?.map(({ name }) => name);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';
  
    const btnBack = useCallback(() => navigate(from), [from, navigate]);
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const chosenMovie = await getMovieById(movieId);
          setMovie(chosenMovie.data);
          const date = chosenMovie.data.release_date.slice(0, 4);
          setYear(date);
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      fetchMovie();
    }, [movieId]);
    return (
      <>
        <button className={css.btn} onClick={btnBack}>
          Go back
        </button>
        <div className={css.wrapper}>
          <img
           className={css.img}
            alt={title}
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          />
          <ul className={css.list}>
            <li>
              <h1>
                {title} {year}
              </h1>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <p>{genresArray}</p>
            </li>
          </ul>
        </div>
  
        <p>Additional information</p>
        <ul>
          <li>
            <Link
               className={css.link}
              to={`/movies/${id}/cast`}
              state={{ from: location.state.from }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={css.link}
              to={`/movies/${id}/reviews`}
              state={{ from: location.state.from }}
            >
              Reviews
            </Link>
          </li>
        </ul>
  
        <Outlet />
      </>
    );
}

export default MovieDetails;