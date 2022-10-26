import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="calculator__result">0</div>
        <div className="calculator__panel">
          <div className="calculator__keyboard">
            <div className="calculator__special">
              <button className="calculator__btn_esp" type="button">AC</button>
              <button className="calculator__btn_esp" type="button">+/-</button>
              <button className="calculator__btn_esp" type="button">%</button>
            </div>
            <div className="calculator__numbers">
              <button className="calculator__btn_num" type="button">1</button>
              <button className="calculator__btn_num" type="button">2</button>
              <button className="calculator__btn_num" type="button">3</button>
              <button className="calculator__btn_num" type="button">4</button>
              <button className="calculator__btn_num" type="button">5</button>
              <button className="calculator__btn_num" type="button">6</button>
              <button className="calculator__btn_num" type="button">7</button>
              <button className="calculator__btn_num" type="button">8</button>
              <button className="calculator__btn_num" type="button">9</button>
              <button className="calculator__btn_num zero" type="button">0</button>
              <button className="calculator__btn_num" type="button">.</button>
            </div>
          </div>
          <div className="calculator__operators">
            <button className="calculator__btn_op" type="button">÷</button>
            <button className="calculator__btn_op" type="button">x</button>
            <button className="calculator__btn_op" type="button">-</button>
            <button className="calculator__btn_op" type="button">+</button>
            <button className="calculator__btn_op" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
