import React from "react";
import "./hero.css";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>CONTACT US</h1>
        <p id="para">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>

        <div className="hero-form_img">
          <form>
            <div className="hero-form_img-buttons">
              <button id="chat">VIA SUPPORT CHAT</button>
              <button id="call">VIA CALL</button>
            </div>
            <button id="email">VIA EMAIL FORM</button>
            <div className="hero-form_img-input">
              <div id="fields">
                <fieldset>
                  <legend>Name</legend>
                  <input type="text" />
                </fieldset>
                <fieldset>
                  <legend>EMAIL</legend>
                  <input type="text" />
                </fieldset>
                <fieldset>
                  <legend>TEXT</legend>
                  <textarea name="text" rows={4}></textarea>
                </fieldset>
              </div>
              <button id="submit">Submit</button>
            </div>
          </form>
          <img
            src="/images/service_24_7.svg"
            alt="sevice"
            className="service-img"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
