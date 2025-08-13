import React from "react";

function SelectButton({ value, selectedNumber, handleSelectedNumber }) {
  const isSelected = selectedNumber === value;

  return (
    <div>
      <button
        onClick={() => handleSelectedNumber(value)}
        className={
          isSelected
            ? "bg-black border border-black w-[42px] h-[42px] lg:w-[72px] lg:h-[72px] text-white lg:text-2xl font-bold"
            : "bg-white border border-black w-[72px] h-[72px] text-black text-2xl font-bold"
        }
      >
        {value}
      </button>
    </div>
  );
}

export default SelectButton;

/* isSelected=Default */

// box-sizing: border-box;

// position: absolute;
// width: 72px;
// height: 72px;
// left: 20px;
// top: 20px;

// background: #FFFFFF;
// border: 1px solid #000000;
