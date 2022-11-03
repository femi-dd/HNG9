const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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
  if (
    !input.operation_type ||
    !parseInt(input.x) ||
    !parseInt(input.y)
  ) {
    response.status(400).send({ error: "Missing fields" });
  } else {
    result = {
      slackUsername: "femi_dd",
      result: 0,
      operation_type: input.operation_type,
    };
    switch (input.operation_type) {
      case "addition":
        result.result = parseInt(input.x) + parseInt(input.y);
        break;
      case "subtraction":
        result.result = parseInt(input.x) - parseInt(input.y);
        break;
      case "multiplication":
        result.result = parseInt(input.x) * parseInt(input.y);
        break;
      default:
        error: response.status(400).send({ error: "Mising fields!" });
        break;
    }
    response.status(200).send(result);
  }
});

app.listen(3000);
