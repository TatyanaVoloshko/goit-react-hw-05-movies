import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';
import useFetchMovie from 'hooks/useFetchMovie';

function Movies() {
 const { movies, error, isLoading, setSearchParams } = useFetchMovie();
  return (
    <>
     {error && <p>Oops...Somesing went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      <form
        onSubmit={setSearchParams}>
        <input
          className={css.input}
          type="text"
          name="search"
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <ul>{movies.length > 0 && <MoviesList movies={movies} />}</ul>
    </>
  );
}

export default Movies;
