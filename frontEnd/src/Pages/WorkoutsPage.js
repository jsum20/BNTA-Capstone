import React, { useState, useEffect } from "react";
import WorkoutsList from "../Components/WorkoutsList";

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  // const [exerciseTargets, setExerciseTargets] = useState([]);

  const getAllWorkouts = () => {
    fetch("http://localhost:8080/api/v1/workout")
    .then(response => response.json())
    .then(data => setWorkouts(data))
  }
  
  useEffect(getAllWorkouts, [])
  // useEffect(getAllExerciseTargets, [])
  
    return(

        <>
          <WorkoutsList workouts = {workouts} />
        </>


    )
}

export default WorkoutsPage;