const express = require("express");

const route = express.Router();
const {
  post,
  getdev,
  getone,
  update,
  deletedata,
} = require("../Controller/control");

route.route("/post").post(post);
route.route("/getalldata").get(getdev);
route.route("/getone/:id").get(getone);
route.route("/update/:id").patch(update);
route.route("/deletedata/:id").delete(deletedata);
// route.route("/getlength").get(Dblength);

module.exports = route;
