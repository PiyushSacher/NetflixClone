import React, { useEffect } from "react";
import { Api_options } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{
    //fetch trailer video and updating the store with trailerVideo
      const dispatch = useDispatch();
    //   const trailerVideo=useSelector((store)=>store.movies.trailer);
    
      const getMovieTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          Api_options
        );
        const json = await data.json();
        console.log(json);
    
        const trailers = json.results.filter((video) => video.type === "Trailer");
        //if there is no trailer in the json.results
        const trailer = trailers.length ? trailers[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieTrailer();
      }, []);

}

export default useMovieTrailer;