import { useState } from "react";
import Button from "./components/Button";

function App() {
  // поправить ноль в начале числа
  // логика базовых операций
  // равно??

  const [recentNumber, setRecentNumber] = useState("");
  const [actualNumber, setActualNumber] = useState("");

  function addValue(e) {
    setActualNumber(actualNumber + e.target.innerText);
  }

  function clear() {
    setRecentNumber("");
    setActualNumber("");
  }

  function change() {
    setActualNumber(`${+actualNumber * -1}`);
  }

  const data = [
    { htmlText: "AC", class: "ac", id: 0, onClick: clear },
    { htmlText: "+/–", class: "change", id: 1, onClick: change },
    { htmlText: "%", class: "procent", id: 2 },
    { htmlText: "÷", class: "divide sticky", id: 3 },
    { htmlText: "7", class: "seven", id: 4, onClick: addValue },
    { htmlText: "8", class: "eight", id: 5, onClick: addValue },
    { htmlText: "9", class: "nine", id: 6, onClick: addValue },
    { htmlText: "×", class: "multiply sticky", id: 7 },
    { htmlText: "4", class: "four", id: 8, onClick: addValue },
    { htmlText: "5", class: "five", id: 9, onClick: addValue },
    { htmlText: "6", class: "six", id: 10, onClick: addValue },
    { htmlText: "-", class: "minus sticky", id: 11 },
    { htmlText: "1", class: "one", id: 12, onClick: addValue },
    { htmlText: "2", class: "two", id: 13, onClick: addValue },
    { htmlText: "3", class: "three", id: 14, onClick: addValue },
    { htmlText: "+", class: "plus sticky", id: 15 },
    { htmlText: "0", class: "zero", id: 16, onClick: addValue },
    { htmlText: ".", class: "point", id: 17, onClick: addValue },
    { htmlText: "=", class: "is sticky", id: 18 },
  ];

  return (
    <div className="main">
      <div className="calculator">
        <p className="calculator__result">{actualNumber}</p>
        <ul className="calculator__container">
          {data.map((item) => {
            return (
              <Button
                item={item}
                key={item.id}
                addValue={addValue}
                onClick={item.onClick}
              />
            );
          })}
        </ul>
      </div>
      <script src="./index.js"></script>
    </div>
  );
}

export default App;
