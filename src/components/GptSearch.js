import React from "react";
import GptSeachBar from "./GptSeachBar";
import GptMovieSuggestion from "./GptMovieSuggestions";
import { BG_Image } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={BG_Image} alt="logo"></img>
      </div>
      <div >
        <GptSeachBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
