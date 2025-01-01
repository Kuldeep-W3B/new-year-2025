import React, { useState } from "react";


const App = () => {
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleStart = () => {
    if (name.trim()) {
      setShowMessage(true);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="App">
      <div className="container">
        {!showMessage ? (
          <div className="name-input">
            <h1 className="animated-text">🎉 Welcome to the New Year Celebration! 🎉</h1>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleStart}>Start Celebration</button>
          </div>
        ) : (
          <div className="celebration">
            <div className="fireworks"></div>
            <h1 className="animated-text">🎉 Happy New Year, {name}! 🎉</h1>
            <p className="animated-paragraph">
              Wishing you joy, health, and success in the coming year!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
