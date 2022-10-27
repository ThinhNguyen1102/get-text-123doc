const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const port = process.env.PORT || 8080;
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
  <p>https://get-text-123doc.herokuapp.com/api/get-text/BLABLABLA</p>`);
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Sever is listenning on port: ${port}`);
});
