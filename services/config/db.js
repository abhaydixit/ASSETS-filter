const mongoose = require("mongoose");
const db =
  "mongodb+srv://admin:FSZk3sfUyTkJcSiq@cluster0.u7rq4.mongodb.net/filter?retryWrites=true&w=majority";

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
