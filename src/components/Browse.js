import React  from "react";
import Header from "./Header";  
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCointainer from "./MainCointainer";
import SecondaryCointainer from "./SecondaryCointainer";


const Browse = () => {

  useNowPlayingMovies();

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
      Browse
    </div>
  );
};

export default Browse;
