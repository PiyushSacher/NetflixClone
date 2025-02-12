import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { Api_options } from "../utils/constants";

//fetch data from tmbd api and update store
//const dispatch = useDispatch();

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies=async()=>{
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        Api_options
      );
    
      const json = await data.json();
      //array of movies coming
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    
      //but why our api is called 2 times?
      //this happens because of react's strict mode, see index.js file , our code is wrapped inside React.strictMode, it happens oly in your local
      // it happens because react check for inconsistences duw to which compoenent is rendered more tha once
      //if we remove this React.StrictMode our api will be called once
    };

    useEffect(()=>{
        getNowPlayingMovies();
    })
  }
 



export default useNowPlayingMovies;
