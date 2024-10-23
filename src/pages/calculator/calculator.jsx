import "./Calculator.css";
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [tmp, setTmp] = useState("");

  const empty = () => setInput("");

  const handleNumberClick = (num) => {
    if (input.length > 19) {
      alert("เกินช่วงอินพุตสูงสุดแล้ว!");
      return;
    }
    setInput((prev) => prev + num);
  };

  const handleOperationClick = (operation) => {
    if (input) {
      if (tmp) {
        setTmp(`${tmp} ${input} ${operation}`);
      } else {
        setTmp(`${input} ${operation}`);
      }
      empty();
    } else if (tmp.slice(-1).match(/-|\+|\*|\//)) {
      setTmp(tmp.slice(0, -1) + operation);
    }
  };

  const handleResultClick = () => {
    if (input) {
      try {
        setInput(eval(`${tmp} ${input}`).toString());
        setTmp("");
      } catch (error) {
        alert("เกิดข้อผิดพลาดในการคำนวณ");
      }
    }
  };

  const handleAllClear = () => {
    setInput("");
    setTmp("");
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div id="calculator">
      <div id="input-wrap">
        <div id="tmp">{tmp}</div>
        <div id="input">{input}</div>
      </div>
      <div id="button-wrap">
        <button id="all-clear" onClick={handleAllClear}>
          CE
        </button>
        <button id="clear" onClick={handleClear}>
          C
        </button>
        <button id="remove" onClick={() => setInput(input.slice(0, -1))}>
          _
        </button>
        <button className="amt divide" onClick={() => handleOperationClick("/")}>
          /
        </button>

        <button className="number" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="number" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="number" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button className="amt times" onClick={() => handleOperationClick("*")}>
          *
        </button>

        <button className="number" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="number" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="number" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button className="amt minus" onClick={() => handleOperationClick("-")}>
          -
        </button>

        <button className="number" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="number" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="number" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button className="amt plus" onClick={() => handleOperationClick("+")}>
          +
        </button>

        <button className="number num-0" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button id="result" onClick={handleResultClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
