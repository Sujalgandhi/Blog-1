const mongoose = require("mongoose")

const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sujalgandhi0507:sujal0507@cluster0.rikppyq.mongodb.net/blogs"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
