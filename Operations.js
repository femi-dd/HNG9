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
  let operation_copy = operation
  operation = operation.split(" ");
  let f = "";
  const dict = [
    ["addition", "+", "plus", "add", "sum"],
    ["subtraction", "subract", "-", "minus", "difference"],
    ["multiplication", "multiply", "*", "product", "times"],
    ["division", "divide", "/", "division"],
  ];

  dict.forEach((value, index) => {
    operation.forEach((op) => {
      if (value.includes(op) || operation_copy.includes(dict[index][value])) {
        f = dict[index][0];
      }
    });
  });

  return f;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  work,
};
