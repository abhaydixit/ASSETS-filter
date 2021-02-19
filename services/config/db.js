const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
