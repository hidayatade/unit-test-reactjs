import React, { useState } from "react";
// image
import Decrement from "../../asset/images/minus.png"
import Increment from "../../asset/images/plus.png"
// style
import "./counter.scss";

export default function Counter() {
  const [amount, setAmount] = useState(0);

  const increment = () => {
    setAmount(
      amount + 1
    );
  };

  const decrement = () => {
    setAmount(
      amount === 0 ? amount - 0 : amount - 1
    );
  };

  return (
    <>
      <div className="counter">
        <div className="counter-wrap">
          <button 
            className="counter-wrap__box"
            onClick={() => decrement()}
          >
            <img 
              src={Decrement} 
              alt="decrement" 
              className="counter-wrap__box-image"
            />
          </button>
          <div className="counter-wrap__count">
            <p className="counter-wrap__count-number">
              {amount}
            </p>
          </div>
          <button 
            className="counter-wrap__box"
            onClick={() => increment()}
          >
            <img 
              src={Increment} 
              alt="increment" 
              className="counter-wrap__box-image" 
            />
          </button>
        </div>
      </div>
    </>
  );
};