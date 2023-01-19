const datas = require("../Model/model");

const post = async (req, res) => {
  try {
    const { Firstname, Lastname, Nameofpc, Complexion, Gender, Phoneno } =
      req.body;
    const postdata = await datas.create({
      Firstname,
      Lastname,
      Nameofpc,
      Complexion,
      Gender,
      Phoneno,
    });

    res.status(201).json({
      message: "successfully posted",
      data: postdata,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occcured",
      data: error.message,
    });
  }
};

const getdev = async (req, res) => {
  try {
    const getdata = await datas.find();
    res.status(200).json({
      message: "successfully gotten",
      data: getdata,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occcured",
      data: error.message,
    });
  }
};

const getone = async (req, res) => {
  try {
    const { Firstname } = req.body;
    const getonedata = await datas.findById(req.params.id);
    res.status(201).json({
      message: "successfully gotten id " + req.params.id,
      data: getonedata,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occcured",
      data: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const { Firstname, Lastname, Nameofpc, Complexion, Gender, Phoneno } =
      req.body;
    const updatedata = await datas.findByIdAndUpdate(
      req.params.id,
      {
        Firstname,
        Lastname,
        Nameofpc,
        Complexion,
        Gender,
        Phoneno,
      },
      { new: true }
    );

    res.status(200).json({
      message: "successfully updated",
      data: updatedata,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occcured",
      data: error.message,
    });
  }
};

const deletedata = async (req, res) => {
  try {
    const deletedata = await datas.findByIdAndRemove(req.params.id);
    res.status(200).json({
      message: "successfully deleted id " + req.params.id,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occcured",
      data: error.message,
    });
  }
};

const Dblength = async (req, res) => {
  try {
    const length = await datas;
    res.status(200).json({
      message: "the length of all the data is".toUpperCase() + length,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occcured",
      data: error.message,
    });
  }
};

module.exports = { post, getdev, getone, update, deletedata, Dblength };
