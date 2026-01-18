import { useState } from "react";
import "./OfflineGame.css";

const OfflineGame = () => {
  const [target] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1–10");

  const checkGuess = () => {
    if (Number(guess) === target) {
      setMessage("🎉 Correct! You win!");
    } else {
      setMessage("❌ Wrong! Try again");
    }
  };

  return (
    <div className="offline-container">
      <h1>🚫 You Are Offline</h1>
      <p>Play this mini game until internet comes back 😎</p>

      <div className="game-card">
        <h2>🎯 Guess The Number</h2>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="1 - 10"
        />
        <button onClick={checkGuess}>Check</button>
        <p className="game-msg">{message}</p>
      </div>
    </div>
  );
};

export default OfflineGame;
