import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value.concat(e.target.name));
  };
  const handleClear = () => {
    setValue("");
  };
  const handleBack = () => {
    setValue(value.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setValue(eval(value).toLocaleString("en-IN"));
    } catch (err) {
      setValue("Error");
    }
  };
  console.log(typeof value);
  return (
    <div className="container">
      <div className="displayContent">
        <form>
          <input type="text" className="input" value={value} readOnly />
        </form>
      </div>
      <div className="btns">
        <button className="btn backspace" name="7" onClick={handleBack}>
          Back
        </button>
        <button className="btn clear" name="7" onClick={handleClear}>
          C
        </button>
        <button className="btn" name="+" onClick={handleClick}>
          +
        </button>
        <button className="btn" name="7" onClick={handleClick}>
          7
        </button>
        <button className="btn" name="8" onClick={handleClick}>
          8
        </button>
        <button className="btn" name="9" onClick={handleClick}>
          9
        </button>
        <button className="btn" name="-" onClick={handleClick}>
          -
        </button>
        <button className="btn" name="4" onClick={handleClick}>
          4
        </button>
        <button className="btn" name="5" onClick={handleClick}>
          5
        </button>
        <button className="btn" name="6" onClick={handleClick}>
          6
        </button>
        <button className="btn" name="*" onClick={handleClick}>
          *
        </button>
        <button className="btn" name="1" onClick={handleClick}>
          1
        </button>
        <button className="btn" name="2" onClick={handleClick}>
          2
        </button>
        <button className="btn" name="3" onClick={handleClick}>
          3
        </button>
        <button className="btn btn-zero" name="0" onClick={handleClick}>
          0
        </button>
        <button className="btn" name="/" onClick={handleClick}>
          /
        </button>
        <button className="btn" name="." onClick={handleClick}>
          .
        </button>
        <button className="btn" name="=" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
