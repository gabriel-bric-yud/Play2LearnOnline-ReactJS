import React from "react";
import GameCard from "../components/GameCard.jsx";

function Main() {
  return ( 
    <div className = "container-sm d-grid">
      <div className = "container-fluid justify-content-center d-flex">
        <GameCard  title = "Anagram Hunt"
          description = {[[1, "Do you like Scabble? Words with Friends?"], [2, "Improve how fast you can recognize anagrams in a word with this neat little game!"]]}
          redirect = "/AnagramHuntSetup"
        />
        <GameCard  title = "Math Facts Practice" 
          description = {[[1, "Improve your mental math skills with this exciting game"]]}
          redirect = "/MathFactsSetup"
        />
      </div>
    </div>
  )
}

export default Main;