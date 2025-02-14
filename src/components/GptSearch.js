import React from "react";
import GptSeachBar from "./GptSeachBar";
import GptMovieSuggestion from "./GptMovieSuggestions";
import { BG_Image } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_Image}
          alt="logo"
        ></img>
      </div>
      <GptSeachBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
