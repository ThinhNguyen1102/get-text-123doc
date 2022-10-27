const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use("/api/get-text/:url", require("./helpers/handleFetchText"));

app.use("*", (req, res, next) => {
  res.send(`<h4>nguyen van thinh</h4>
  <h5>Link text 123doc</h5>
  <p>https://text.123docz.net//document/BLABLABLA.htm</p>
  <h5> ==> Link get text</h5>
  <p>https://123doc-get-text.herokuapp.com/BLABLABLA</p>`);
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    success: false,
    data: data,
  });
});

app.listen(port, () => {
  console.log(`Sever is listenning on port: ${port}`);
});