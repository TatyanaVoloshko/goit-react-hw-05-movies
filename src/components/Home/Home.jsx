import { getTrending } from "servis/API";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



function Home () {
    const [results, setResults] = useState();
    const location = useLocation();
    useEffect(() => {
      getTrending().then(response => {
        const data = response.results;
        setResults(
          data.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })
        );
      });
    }, [location]);
    return (
      <>
        <h1>Trending today</h1>
        <ul>{results}</ul>;
      </>
    );
  };


export default Home;

