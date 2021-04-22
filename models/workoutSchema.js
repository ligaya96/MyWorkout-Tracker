// Work out schema Database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //day
        day : {
            type: Date,
            default: () => new Date()
        },
    excercises: [{
          //type
            type : {
                type: String,
                trim : true, 
                required: "Enter Exercise Type"
            },
            // Name 
            name : {
                type: String, 
                trim: true, 
                required: "Enter the name of Excerise"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            duration: {
                type : Number,
                required: "Enter Time/Duration of Exercise"
            },
            distance: {
                type : Number
            }
    }]
    //Distance
    //weights // Sets //Reps
});
const Workouts = mongoose.model("Workouts", workoutSchema);
module.exports = Workouts;
