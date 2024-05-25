let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function selectOperator(op) {
  if (currentNumber === "") return; // Don't accept operator without a number
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function calculate() {
  if (currentNumber === "" || operator === "") return; // Don't calculate without a second number and operator

  let result = 0;
  const prevNum = parseFloat(previousNumber);
  const currNum = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = prevNum + currNum;
      break;
    case "-":
      result = prevNum - currNum;
      break;
    case "*":
      result = prevNum * currNum;
      break;
    case "/":
      if (currNum === 0) {
        alert("Error: Division by zero");
        return;
      }
      result = prevNum / currNum;
      break;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = currentNumber;
}
