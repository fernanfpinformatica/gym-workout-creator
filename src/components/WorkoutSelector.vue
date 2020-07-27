<template>
  <div id="workout-selector-component">
    <div class="workout-selector-form">
      <label for="workout-selector">Rutina:</label>
      <select v-model="selected" @change="showPrintVersionWorkout()" id="workout-selector">
        <option v-for="(workout, index) in workoutKeynames" v-bind:key="index"
                v-bind:value="workout">
                {{ workout }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import workouts from './../assets/data/workouts.js'

export default {
  name: 'WorkoutSelector',
  data () {
    return {
      selected: '',
      workoutKeynames: Object.keys( workouts )
    }
  },
  methods: {
   showPrintVersionWorkout() {
     this.$emit( 'workoutSelected', this.selected )
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #workout-selector-component {
    text-align: center;
    padding: 1rem;
    background-color: lightgrey;
  }

  .workout-selector-form {
    width: 100%;
    margin-bottom: 1rem;
  }

  label {
    margin-right: 1rem;
  }
</style>
