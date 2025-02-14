import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCointainer from "./MainCointainer";
import SecondaryCointainer from "./SecondaryCointainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        //react fragments 
        <>
          <MainCointainer />
          <SecondaryCointainer />{" "}
        </>
      )}
      {/*
      //main video cointainer:
            -video cointainer
            -video title
      
      //secondaryCointainer:
            -movieList * n
            -cards * n
       */}
    </div>
  );
};

export default Browse;
