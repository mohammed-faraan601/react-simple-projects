import React, { useEffect, useState } from "react";
import SelectButton from "./SelectButton";
import { Link } from "react-router-dom";



function GamePage() {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isNumberNotSelected, setIsNumberNotSelected] = useState(false);
  const [selectedDiceNumber, setSelectedDiceNumber] = useState(0);
  const [rollCount, setRollCount] = useState(0);
  const noOfButtons = Array.from({ length: 6 }, (_, i) => i + 1);
  const diceImages = [
    "dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png",
  ];

  function handleSelectedNumber(value) {
    setSelectedNumber((prev) => (prev === value ? null : value));
    setIsNumberNotSelected(false);
  }

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
  }

  function handleDiceClick() {
    if (selectedNumber && !isNumberNotSelected) {
      setSelectedDiceNumber(generateRandomNumber());
      setRollCount((prev) => prev + 1)
      setIsNumberNotSelected(false);
      return;
    }
    setIsNumberNotSelected(true);
    return;
  }

  function handleScoreChange() {
    if (selectedNumber && selectedDiceNumber) {
      if (selectedNumber === selectedDiceNumber + 1) {
        setScore((prevState) => prevState + selectedNumber);
        return;
      } else {
        if (score >= 1) {
          if (score === 1) {
            setScore(0);
            return;
          }
          setScore((prevState) => prevState - 2);
          console.log("not equals", score);

          return;
        }
      }
    }
    return;
  }

  useEffect(() => {
    handleScoreChange();
    console.log(window.screen.width, window.screen.height);
    
  }, [selectedDiceNumber, rollCount]);

  console.log(selectedNumber, selectedDiceNumber, score);
  return (
    <div className="flex flex-col lg:max-w-7xl mx-auto relative">
      <Link to={'/'} className="absolute bg-black text-white text-lg rounded py-1 px-4 mt-4 left-2">Back</Link>
      {isNumberNotSelected ? (
        <p className="flex absolute text-red-600 lg:text-2xl mt-7 right-2 lg:right-20">
          You have not selected any number
        </p>
      ) : null}
      <div className="flex flex-row mt-16 justify-between items-center mx-20">
        <div className="flex flex-col items-center">
          <h1 className="text-black text-5xl lg:text-8xl font-medium">{score}</h1>
          <p className="text-black lg:text-2xl">Total Score</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-6">
            {noOfButtons &&
              noOfButtons.map((value, _) => (
                <SelectButton
                  value={value}
                  key={value}
                  selectedNumber={selectedNumber}
                  handleSelectedNumber={handleSelectedNumber}
                />
              ))}
          </div>
          <p className=" text-black font-bold text-2xl mt-7 ml-auto">
            Select Number
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center h-[449px] mx-auto mt-14 gap-9 my-0">
        <div className="flex flex-col items-center gap-3.5">
          <div onClick={handleDiceClick} className="cursor-pointer">
            <img src={`/images/${diceImages[selectedDiceNumber]}`} alt="dice" />
          </div>
          <p className="text-black font-medium text-2xl">
            Click on Dice to roll
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-">
          <button
            onClick={() => setScore(0)}
            className="bg-white border border-black w-[220px] h-[44px] rounded text-black text-base font-semibold"
          >
            Reset Score
          </button>
          <button
            onClick={() => setShowRules(!showRules)}
            className="bg-black border border-black w-[220px] h-[44px] rounded text-white text-base font-semibold"
          >
            Show Rules
          </button>
        </div>
      </div>
      {showRules && (
        <div
          style={{ backgroundColor: "#fbf1f1" }}
          className="flex flex-col gap-6 w-max p-5 m-auto mt-16"
        >
          <h1 className="text-black font-bold text-2xl">
            How to play dice game
          </h1>
          <div className="mt-">
            <p className="text-black font-medium text-base">
              Select any number
            </p>
            <p className="text-black font-medium text-base">
              Click on dice image
            </p>
            <p className="text-black font-medium text-base">
              After click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p className="text-black font-medium text-base">
              If you get wrong guess then 2 point will be dedcuted{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GamePage;
