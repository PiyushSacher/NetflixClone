import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { Api_options } from "../utils/constants";

//fetch data from tmbd api and update store
//const dispatch = useDispatch();

const usePopularMovies = () => {
  const dispatch = useDispatch();


  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",

      Api_options
    );

    const json = await data.json();
    //array of movies coming
    console.log(json.results);
    dispatch(addPopularMovies(json.results));

    //but why our api is called 2 times?
    //this happens because of react's strict mode, see index.js file , our code is wrapped inside React.strictMode, it happens oly in your local
    // it happens because react check for inconsistences duw to which compoenent is rendered more tha once
    //if we remove this React.StrictMode our api will be called once
  };

  useEffect(() => {
    getPopularMovies();
  },[]);
};

export default usePopularMovies;
