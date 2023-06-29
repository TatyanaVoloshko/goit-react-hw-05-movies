import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import Header from "./Header/Header";


export const App = () => {
  return (
    <div>
    <Routes>
<Route path="/" element={<Header />}>
  <Route index element={<Home />} />
<Route path="/movies" element={<Movies />} />
<Route path="/movies/:movieId" element={<MovieDetails />}>
  <Route path="cast" element={<Cast />} />
  <Route path="reviews" element={<Reviews />} />
  </Route>
  <Route path="*" element={<Navigate to='/' />} />
  </Route>

</Routes>
      
    </div>
  );
};
