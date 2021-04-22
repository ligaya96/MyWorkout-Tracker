//made a route folder 
// Routes 
const express = require("express");
const router = express.Router();
const Excerise = require("../models/workoutSchema");

//Get Workouts
router.get("/api/workouts", (req, res) => {
    Excerise.find()
    .sort({date: -1})
    .then(dbWorkouts =>{
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

//Post certain workouts
router.post("/api/workouts", ({body}, res) => {
    Excerise.create(body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
})

// Put 
router.put("/api/workouts/:id", ({ body, params}, res) => {
 Excerise.findByIdAndUpdate(
     params.id, {$push: {exercises : body }
     },
     {
         new :true,
     }
 ).then(dbWorkouts => {
     res.json(dbWorkouts);
 }).catch(err => {
    res.status(400).json(err);
 });
});
// Get 
router.get("/api/workouts/range", (req, res) => {
    Excerise.find({})
    .sort({date: -1})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})


