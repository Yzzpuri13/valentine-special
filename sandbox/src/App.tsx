import React, { useState } from "react";
import "./App.css";

const phrases = ["No", "Are you sure?", "Really sure?", "karna yes ke nhi..."];

function App() {
  const [count, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  function handleNoClick() {
    setCount(count + 1);
  }

  function handleYesClick() {
    setYesPressed(true);
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 750); // Match this with animation duration
  }

  function getNoButtonText() {
    return phrases[Math.min(count, phrases.length - 1)];
  }

  const yesButtonFontSize = 16 + count * 16;

  return (
    <div className={`valentine-container ${yesPressed ? "yes-active" : ""}`}>
      {!yesPressed && (
        <>
          <div
            className="gif-wrapper"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              alt="Sailor Moon"
              src="https://media1.tenor.com/m/9q149OmBuVgAAAAd/sailor-moon-pretty-guardian-sailor-moon.gif"
              className="initial-gif"
              style={{ maxWidth: "100%", width: "300px" }}
            />
            {showHearts && (
              <div>
                <span className="heart" style={{ top: "-10%", left: "-20%" }}>
                  ❤️
                </span>
                <span className="heart" style={{ top: "-10%", right: "-20%" }}>
                  ❤️
                </span>
                <span className="heart" style={{ bottom: "-20%", left: "20%" }}>
                  ❤️
                </span>
                <span
                  className="heart"
                  style={{ bottom: "-20%", right: "20%" }}
                >
                  ❤️
                </span>
                {/* Adjust positions as needed */}
              </div>
            )}
          </div>
          <div className="text">Will you be my valentine?</div>
          <div>
            <button
              className="yes-button button valentine-button-spacing"
              onClick={handleYesClick}
              style={{ fontSize: `${yesButtonFontSize}px` }}
            >
              Yes
            </button>
            <button className="no-button button" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
      {yesPressed && (
        <>
          <img
            alt="Celebration"
            src="https://media1.tenor.com/m/05BGA8n3Eu8AAAAC/%ED%8C%A1%EB%B0%8D.gif"
            className="center-gif"
          />
          <div className="text">Yayy!!!!!</div>
        </>
      )}
    </div>
  );
}

export default App;
