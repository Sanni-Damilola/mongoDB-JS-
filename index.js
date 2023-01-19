const express = require("express");
const app = express();
const port = 2001;
require("./Config/dbs");
app.use(express.json());
const datas = require("./Routes/route");

app.all("/", (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
});

app.use("/", datas);

app.listen(port, () => {
  console.log("done");
});
