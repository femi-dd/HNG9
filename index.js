const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Operations = require("./Operations");
const app = express();

app.use(cors({ "access-control-allow-origin": "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/backend_track/stage_1/", (request, response) => {
  response.status(200).send({
    slackUsername: "femi_dd",
    backend: true,
    age: 24,
    bio: "newbie Developer",
  });
});

app.post("/backend_track/math/", (request, response) => {
  const input = request.body;
  if (!input.operation_type) {
    response.status(400).send({ error: "Missing fields" });
  } else {
    let result = {
      slackUsername: "femi_dd",
      result: 0,
      operation_type: Operations.work(input.operation_type),
    };

    switch (result.operation_type) {
      case "addition":
        result.result = Operations.add(input.x, input.y);
        break;
      case "subtraction":
        result.result = Operations.subtract(input.x, input.y);
        break;
      case "multiplication":
        result.result = Operations.multiply(input.x, input.y);
        break;
      case "division":
        result.result = Operations.divide(input.x, input.y);
        break;
      default:
        console.log(input);
        break;
    }
    response.status(200).send(result);
  }
});

app.listen(3000);
