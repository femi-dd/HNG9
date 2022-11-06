function add(x, y) {
  return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
  return parseInt(x) - parseInt(y);
}

function multiply(x, y) {
  return parseInt(x) * parseInt(y);
}

function divide(x, y) {
  return parseInt(x) / parseInt(y);
}

function work(operation) {
  let operation_copy = operation;
  let f;

  operation = operation.split(" ");
  const dict = [
    ["addition", "+", "plus", "add", "sum"],
    ["subtraction", "subract", "-", "minus", "difference"],
    ["multiplication", "multiply", "*", "product", "times"],
    ["division", "divide", "/", "division"],
  ];

  let symbol = operation_copy.match(/[+-/*//]/);

  if (symbol != null) {
    symbol[0] == "+" ? (f = dict[0][0]) : "";
    symbol[0] == "-" ? (f = dict[1][0]) : "";
    symbol[0] == "*" ? (f = dict[2][0]) : "";
    symbol[0] == "/" ? (f = dict[3][0]) : "";
  } else {
    dict.forEach((value, index) => {
      operation.forEach((op) => {
        if (value.includes(op)) {
          f = dict[index][0];
        }
      });
    });
  }

  return f;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  work,
};
