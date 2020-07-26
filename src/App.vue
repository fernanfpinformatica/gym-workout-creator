<template>
  <div id="app">
    <Workout v-for="index in workoutsPerPage" :key="index"
             :calloutData="workout.calloutData"
             :workoutTableData="workout.workoutTableData"
    />
  </div>
</template>

<script>
import Workout from './components/Workout.vue'
import workouts from './assets/data/workouts.js'

const workoutSelector = "dividedRoutineDay7";

export default {
  name: 'App',
  components: {
    Workout,
  },
  data () {
    return {
      workoutsPerPage: {
        type: Number,
        default: 2
      },
      workout: workouts[ `${workoutSelector}` ]
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
</style>
