// Work out schema Database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //name
    //Excerise type
    //Distance
    //weights // Sets //Reps

})

const Workouts = mongoose.model("Workouts", workoutSchema);
module.exports = Workouts;
