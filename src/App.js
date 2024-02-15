import React, { useState } from "react";
import "./App.css";

function App() {
  const [showDiv, setShowDiv] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const [buttonClass, setButtonClass] = useState("button-no");
  const [content, setContent] = useState("No");

  const imageUrls = [
    "../photos/1.gif",
    "../photos/2.jpeg",
    "../photos/3.gif",
    "../photos/4.jpeg",
    "../photos/5.jpeg",
    "../photos/6.gif",
    "../photos/7.jpeg",
    "../photos/8.jpeg",
    "../photos/9.jpeg",
    "../photos/10.jpeg",
    "../photos/11.jpeg",
    "../photos/12.jpeg",
    "../photos/13.jpeg",
    "../photos/14.jpeg",
    "../photos/15.jpeg",
    "../photos/16.jpeg",
    "../photos/17.jpeg",
    "../photos/18.jpeg",
    "../photos/19.jpeg",
    "../photos/20.jpeg",
    "../photos/21.jpeg",
    "../photos/22.jpeg",
    "../photos/23.jpeg",
    "../photos/24.jpeg",
    "../photos/25.gif",
    "../photos/26.jpeg",
    "../photos/27.jpeg",
    "../photos/28.jpeg",
    "../photos/29.jpeg",
    "../photos/30.jpeg",
    "../photos/31.jpeg",
    "../photos/32.jpeg",
    "../photos/33.jpeg",
    "../photos/34.jpeg",
    "../photos/35.jpeg",
    "../photos/36.gif",
    "../photos/37.jpeg",
    "../photos/38.gif",
    "../photos/39.jpeg",
    "../photos/40.jpeg",
  ];

  const handPostEffect = () => {
    setShowDiv(!showDiv);
    setShowDiv1(!showDiv1);
    setShowDiv2(!showDiv2);
    setShowDiv3(!showDiv3);
    alert("Enjoy the show!");
    window.open(
      "https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548",
      "_blank"
    );
  };

  const handleClassChange = () => {
    setButtonClass("button-yes");
    setContent("Let me think about it");
  };

  const handleMouseLeave = () => {
    setButtonClass("button-no");
    setContent("No");
  };

  const handleAlert = () => {
    alert("Don't worry take your time. When you're ready, make your decision.");
  };

  return (
    <div className="App">
      <div className="grid-container">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="block">
        <h2>Will you be my valentines?</h2>
        <p>Please carefully consider your choice.</p>
        <div className="button-box">
          <button className="button button-yes" onClick={handPostEffect}>
            Yes
          </button>
          <button
            className={buttonClass}
            onMouseEnter={handleClassChange}
            onMouseLeave={handleMouseLeave}
            onClick={handleAlert}
          >
            {content}
          </button>
          {showDiv && <div class="firework"></div>}
          {showDiv1 && <div class="firework"></div>}
          {showDiv2 && <div class="firework"></div>}
          {showDiv3 && <div class="firework"></div>}
        </div>
      </div>
    </div>
  );
}

export default App;
