import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, calcState] = useState({ total: 0, next: null, operation: null });

  const calcBtn = (e) => {
    calcState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

  return (
    <div className="calculator">
      <div className="calculator__result">
        {total}
        {operation}
        {next}
      </div>
      <div className="calculator__panel">
        <div className="calculator__keyboard">
          <div className="calculator__special">
            <button onClick={calcBtn} className="calculator__btn_esp" type="button">AC</button>
            <button onClick={calcBtn} className="calculator__btn_esp" type="button">+/-</button>
            <button onClick={calcBtn} className="calculator__btn_esp" type="button">%</button>
          </div>
          <div className="calculator__numbers">
            <button onClick={calcBtn} className="calculator__btn_num" type="button">1</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">2</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">3</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">4</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">5</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">6</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">7</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">8</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">9</button>
            <button onClick={calcBtn} className="calculator__btn_num zero" type="button">0</button>
            <button onClick={calcBtn} className="calculator__btn_num" type="button">.</button>
          </div>
        </div>
        <div className="calculator__operators">
          <button onClick={calcBtn} className="calculator__btn_op" type="button">÷</button>
          <button onClick={calcBtn} className="calculator__btn_op" type="button">x</button>
          <button onClick={calcBtn} className="calculator__btn_op" type="button">-</button>
          <button onClick={calcBtn} className="calculator__btn_op" type="button">+</button>
          <button onClick={calcBtn} className="calculator__btn_op" type="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
