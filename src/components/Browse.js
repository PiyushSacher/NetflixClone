import React  from "react";
import Header from "./Header";  
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCointainer from "./MainCointainer";
import SecondaryCointainer from "./SecondaryCointainer";
import usePopularMovies from "../hooks/usePopularMovies";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {/*
      //main video cointainer:
            -video cointainer
            -video title
      
      //secondaryCointainer:
            -movieList * n
            -cards * n
       */
      }
      <MainCointainer/>
      <SecondaryCointainer/>
      
    </div>
  );
};

export default Browse;
