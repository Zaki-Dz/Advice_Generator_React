import { useState, useEffect } from "react";

import Divider from "../assets/images/pattern-divider-desktop.svg";
import Dice from "../assets/images/icon-dice.svg";

const Card = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    const api = "https://api.adviceslip.com/advice";

    fetch(api)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));
  };

  const handleClick = () => {
    getAdvice();
  };

  return (
    <div className="card">
      {advice ? <p>Advice #{advice.id}</p> : <p>Advice #000</p>}

      {advice ? <q>{advice.advice}</q> : <q>Loading...</q>}

      <div className="divider">
        <img src={Divider} />
      </div>

      <button onClick={handleClick}>
        <img src={Dice} />
      </button>
    </div>
  );
};

export default Card;

