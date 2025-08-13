import React from "react";
import { BASE_URL } from "../App";

function SearchResults({ foodData, loading, error }) {
  const cardStyle = {
    borderImageSource: `radial-gradient(
        '80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%'
      ),
      'radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%'
      )`,
    background: `url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)`,
    backgroundBlendMode: "overlay, normal",
    backdropFilter: "blur(13.1842px)",
    borderRadius: "20px",
  };

  const cardContentStyle = {
    position: "relative",
    zIndex: "20",
    padding: "10px",
  };
  
  
  return (
    <section className="relative min-h-screen lg:h-[calc(100vh-240px)] overflow-hidden"
    style={{
      backgroundImage: `url("images/results_bg.png")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      
    }}
    >
      {/* Background Blur */}
      <div
        style={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent overlay
        }}
      ></div>
      <div className=" lg:max-w-[1200px] p-3 pt-[80px] mx-auto">
          <div className="absolute z-1 inset-12 flex flex-col items-center mx-auto gap-2">
          {error ? <h2 className="  text-white font-bold text-4xl ">{error}</h2> : null}
          {loading ? <h2 className=" text-white font-bold text-4xl ">Loading data. Please wait!</h2> : null}
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap gap-x-5 gap-y-8 justify-between items-center ">
            {foodData
              ? foodData.map((item, index) => (
                  <div
                    key={index}
                    className="relative text-white border-2 border-white rounded-3xl w-[340px] h-[167px]"
                  >
                    <div style={cardStyle} className="absolute z-10 inset-0">
                      <div style={cardContentStyle} className="text-white">
                        <div className="flex">
                          <div>
                            <img src={BASE_URL + item.image} alt="item.name" className="h-[133px] min-w-[133px]"/>
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <h2 className="text-white font-bold">
                                {item.name}
                              </h2>
                              <p className="text-xs">{item.text}</p>
                            </div>
                            <button className="bg-red-500 text-base max-w-fit px-1.5 py-1 mt-4 ml-auto text-white border-none rounded cursor-pointer">
                              {"$ " + item.price + ".00"}
                            </button>
                          </div>
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

/* jimmy-dean-Yn0l7uwBrpw-unsplash 1 */




