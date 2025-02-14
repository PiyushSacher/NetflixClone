import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryCointainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);

  const popularMovies=useSelector((store) => store.movies?.popularMovies);
  return (
    movies && (
      <div className=" bg-black">
        {/*
      multiple movie lists
      -popular (moviecards*n)
      -now playing (moviecards*n)
      -horror (moviecards*n)
      */}
        <div className="mt-0 md:-mt-52 pl-4 md:pl-10 relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Upcoming"} movies={movies} />
          <MovieList title={"Horror"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryCointainer;
