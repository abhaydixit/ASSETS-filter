const express = require("express");
const Activity = require("./models/Activity");
const connectDB = require("./config/db");
const router = express.Router();

const app = express();

// Connect to Database
connectDB();

app.use(express.json({ extented: false }));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.get("/", (req, res) => res.send("API running"));

app.post("/create", async (req, res) => {
  try {
    console.log("Server received requiest", req.body);
    activity = new Activity(req.body);

    await activity.save();
    res.send("Data saved succesfully");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
