import React from "react";
import { Link } from "react-router-dom";

function StartGame() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <div>
        <img src="/images/dices.png" alt="dice" />
      </div>
      <div className="flex flex-col justify-center ">
        <h1 className="font-bold text-black text-6xl lg:text-8xl my-2">DICE GAME</h1>
        <Link to={'/gamePage'} className=" bg-black min-w-40 lg:min-w-52 text-white text-center px-4 py-2.5 rounded-md text-base ml-auto">
          Play Now
        </Link>
      </div>
    </div>
  );
}

export default StartGame;
