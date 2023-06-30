import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from 'servis/API';
import css from './Cast.module.css'

function Cast () {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const elements = cast.map(({ cast_id, character, name, profile_path }) => (
      <li key={cast_id}>
        <img src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `https://www.suryalaya.org/images/no_image.jpg`
                    }
                    alt="actor" />
        <h2 className={css.cast}>{name}</h2>
        <h2 className={css.cast}>Character: {character}</h2>
      </li>
    ));
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const chosenMovie = await getMovieCast(movieId);
          setCast(chosenMovie.data.cast);
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      fetchMovie();
    }, [movieId]);
    return <ul>{elements}</ul>;
}

export default Cast;