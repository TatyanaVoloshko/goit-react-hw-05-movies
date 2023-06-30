import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import css from './App.module.css'
import Header from "./Header/Header";


const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));



export const App = () => {
  return (
    <div className={css.App}>
    
    <Routes>
<Route path="/" element={<Header />}>
<Route index element={<Home />}/>
 
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
