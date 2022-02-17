import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // we use the fetchUrl value in the dependency because we are dependent on the fetchUrl Value and we are using this in useEffect so we have to use it in depedency variable
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row__posters">
        {movies.map((movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            ))
        }
      </div>
    </div>
  );
}

export default Row;
