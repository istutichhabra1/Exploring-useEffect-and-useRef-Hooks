import React, { useState, useEffect } from "react";

function RandomNumberUpdater() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    console.log(`State updated: ${randomNumber}`);
  }, [randomNumber]); 
  const updateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100); 
    setRandomNumber(newRandomNumber); 
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={updateRandomNumber}>Generate Random Number</button>
    </div>
  );
}

export default RandomNumberUpdater;
