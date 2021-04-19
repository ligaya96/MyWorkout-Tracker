const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.post("./workoutSchema", async(req, res) => {
  try {
      const Myworkout = await db.Workouts.create({
        name: req.body.name
      });
      res.json(Myworkout)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


app.use(require(""));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
