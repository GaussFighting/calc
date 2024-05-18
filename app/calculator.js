const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

const func = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

const calculate = (expression) => {
  let expArr = expression.split(" ");

  while (/[^0-9.-]/g.test(expArr.join(" "))) {
    for (let i = 0; i < expArr.length - 2; i++) {
      if (func[expArr[i]] && !isNaN(expArr[i + 1]) && !isNaN(expArr[i + 2])) {
        const operator = expArr[i];
        const operand1 = parseFloat(expArr[i + 1]);
        const operand2 = parseFloat(expArr[i + 2]);
        const result = func[operator](operand1, operand2);
        expArr.splice(i, 3, result.toString());
        break;
      }
    }
  }
  return parseFloat(expArr[0]);
};

exports.calculate = calculate;
