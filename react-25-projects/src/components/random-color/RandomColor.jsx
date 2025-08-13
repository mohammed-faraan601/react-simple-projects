import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(255);
    const g = randomColorUtility(255);
    const b = randomColorUtility(255);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomHexColor();
    else handleCreateRandomRgbColor();
  }, [typeOfColor]);

  return (
    <div style={{ height: "100vh", width: "100wh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          flexDirection: "column",
          marginTop: "50px",
          fontSize: "40px",
        }}
      >
        <h3 style={{ marginBottom: "0" }}>
          {typeOfColor === "hex" ? "HEX Color" : "RGB Color"}
        </h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
