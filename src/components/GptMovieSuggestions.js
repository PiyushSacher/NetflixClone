import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        <h1>{movieNames[0]}</h1>
        {movieNames.map((movieName,idx) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[idx]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
