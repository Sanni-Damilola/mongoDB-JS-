const moogoose = require("mongoose");

const url = "mongodb://localhost/Devs";

moogoose.connect(url);
moogoose.connection
  .on("open", () => {
    console.log("Database connected");
  })
  .once("error", (error) => {
    console.log("failed to connect to database", error);
  });
