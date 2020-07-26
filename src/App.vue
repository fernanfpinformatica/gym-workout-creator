<template>
  <div id="app">
    <Workout
      v-for="workout in workouts"
      :key="workout"
      :calloutData="workout.calloutData"
      :workoutTableData="workout.workoutTableData"
    />
  </div>
</template>

<script>
import Workout from './components/Workout.vue'
import workoutsData from './assets/data/torso-pierna.js'

export default {
  name: 'App',
  components: {
    Workout,
  },
  data () {
    return {
      workouts: workoutsData
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
