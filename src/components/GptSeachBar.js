import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { Api_options } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSeachBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);
  const dispatch=useDispatch();

  
  const fetchMovieTMDB=async(movieName)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1",Api_options);

    const json=await data.json();

    return json.results;
  }


  const handleGptSearchClick = async() => {
    const output = SearchText.current.value;
    //make an api call to openai and get movie results

    const gptQuery="Act as a Movie Recommendation syste and suggest some movies for the query : " + output + " only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults?.choices?.[0]?.message?.content);

    const gptMovieList=gptResults?.choices?.[0]?.message?.content.split(",");

    //for each movie we will search in tmdb api
    const promiseArray=gptMovieList.map(movie=>fetchMovieTMDB(movie));
    //[promise,promise,promise,promise,promise];

    //Promise.all takes the array of promises , and promise.all will wait until all the 5 promises are not resolved
    const TMDBresults=await Promise.all(promiseArray);
    console.log(TMDBresults);


    //putting all gpt generated movies in redux store
    dispatch(addGptMovieResult({movieName:gptMovieList, movieResults:TMDBresults}));


    
  };



  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSeachBar;
