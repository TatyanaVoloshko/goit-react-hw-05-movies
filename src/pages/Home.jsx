import MoviesList from 'components/MoviesList/MoviesList';
import useFetchMovies from 'hooks/useFetchMovies';


const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
 
  return (
    <div>
      <h1>Trending today:</h1>
      {error && <p>Oops...Somesing went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      {movies.length > 0 && <MoviesList movies={movies}/>}
    </div>
  );
}

export default Home;