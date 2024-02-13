import { useState } from "react";
import "./App.css";

const incorrectSteps = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again",
  "Last chance?",
  "Change your choice!",
  "Is that your final answer?",
];

function App() {
  const [step, setStep] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);

  const onNoClick = () => {
    setStep((step) => step + 1);
  };

  const onYesClick = () => {
    setIsAgreed(true);
  };

  const isAgreedText = isAgreed ? "I love YOU!" : "Will you be my valentine?";

  const gifLink = isAgreed
    ? "https://media1.tenor.com/m/8236KYU3l80AAAAC/us.gif"
    : "https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.gif";

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <img src={gifLink} alt="Cutie Patootie" />
        <h2 className="text-5xl mt-8">{isAgreedText}</h2>
      </div>
      {!isAgreed && (
        <div className="flex justify-center items-center gap-10 mt-8">
          <button
            onClick={onYesClick}
            className="bg-green-300 p-2 rounded"
            style={{
              fontSize: `${1.25 + step * 1}rem`,
              padding: `${0.5 + step * 0.5}rem`,
            }}
          >
            Yes
          </button>
          <button
            onClick={onNoClick}
            className="bg-red-500 p-2 text-white rounded text-xl"
          >
            {incorrectSteps[step % 7]}
          </button>
        </div>
      )}
    </>
  );
}

export default App;
