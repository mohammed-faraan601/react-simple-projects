import React from "react";
import { BASE_URL } from "../App";

function SearchResults({ foodData, error }) {
  const cardBackgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderImageSource: `radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      ),
      radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )`,
    background: `url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
    backgroundBlendMode: "overlay, normal",
    backdropFilter: "blur(13.1842px)",
    borderRadius: "20px",
  };

  const cardContentStyle = {
    position: "relative",
    zIndex: 1,
    padding: "16px",
  };

  return (
    <section
      className="opacity-50 min-h-[calc(100vh-240px)]"
      style={{
        backgroundImage: `url("images/results_bg.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1200px] pt-[80px] mx-auto">
        {error ? error : null}
        <div className="flex flex-wrap gap-x-5 gap-y-8 justify-between items-center">
          {foodData
            ? foodData.map((item, index) => (
                <div
                  key={index}
                  className="relative w-[340px] h-[167px] rounded-3xl overflow-hidden border border-white"
                >
                  {/* Blurred Background */}
                  <div style={cardBackgroundStyle}></div>
                  {/* Card Content */}
                  <div style={cardContentStyle} className="text-white">
                    <div className="flex">
                      <div className="w-auto">
                        <img src={BASE_URL + item.image} alt={item.name} />
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <div className="flex flex-col gap-2">
                          <h2 className="text-white font-bold">{item.name}</h2>
                          <p>{item.text}</p>
                        </div>
                        <button className="bg-red-500 text-base px-1.5 py-1 text-white border-none rounded cursor-pointer">
                          {"$ " + item.price + ".00"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
