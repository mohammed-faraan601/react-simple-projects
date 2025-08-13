// import React, { useState } from "react";
// import "./hero.css";

// function Hero() {


//   return (
//     <main className="hero">
//       <div className="hero-content">
//         <h1>YOUR FEET DESERVE THE BEST</h1>
//         <p>
//           YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
//           SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
//           SHOES.
//         </p>
//         <div className="hero-content_btn">
//         <button className="shop">Shop Now</button>
//         <button className="category">Category</button>
//       </div>
//       <div className="hero-content_shopping">
//         <p>Also Available On</p>
//         <div className="logos">
//           <img src="/images/shops.png" alt="shops-logos" />
//         </div>
//       </div>
//       </div>
      
//       <div className="hero-img">
//         <img src="/images/shoe_image.png" alt="shoe-image" />
//       </div>
//     </main>
//   );
// }

// export default Hero;

import React from "react";
import "./hero.css";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-content_btn">
          <button className="shop">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="hero-content_shopping">
          <p>Also Available On</p>
          <div className="logos">
            <img src="/images/shops.png" alt="Available Shops" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/shoe_image.png" alt="Shoe" />
      </div>
    </main>
  );
}

export default Hero;
