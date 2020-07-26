<template>
  <div id="app">
    <WorkoutSelector class="no-print" @workoutSelected="updateWorkout" />
    <Workout v-model="workout" v-for="index in workoutsPerPage" :key="index"
             :workout="workout"
    />
  </div>
</template>

<script>
import Workout from './components/Workout.vue'
import WorkoutSelector from './components/WorkoutSelector.vue'
import workouts from './assets/data/workouts.js'

const workoutKeyname = "dividedRoutineDay7";

export default {
  name: 'App',
  components: {
    Workout,
    WorkoutSelector,
  },
  data () {
    return {
      workoutsPerPage: {
        type: Number,
        default: 2
      },
      workout: workouts[ `${workoutKeyname}` ]
    }
  },
  methods: {
    updateWorkout( keyname ) {
      this.workout = workouts[ `${keyname}` ];
    }
  }
}
</script>

<style>
#app {
  font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media print {
   .no-print {
      display: none;
      visibility: hidden;
   }
}
</style>
