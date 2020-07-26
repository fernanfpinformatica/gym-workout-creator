<template>
  <div class="workout-wrapper">
    <WorkoutHeader/>

    <div class="info-callout-wrapper">
      <Callout
        v-for="callout in workout.calloutData"
        :key="callout.title"
        :title="callout.title"
        :listItems="callout.listItems"
      />
    </div>

    <ExerciseTable
      :tableTitlesList="workout.workoutTableData.titlesList"
      :exerciseList="workout.workoutTableData.exercises"
      :weightColumnColespan=workout.workoutTableData.weightColumnColespan
    />
  </div>
</template>

<script>
import WorkoutHeader from './WorkoutHeader.vue'
import Callout from './Callout.vue'
import ExerciseTable from './ExerciseTable.vue'

export default {
  name: 'Workout',
  components: {
    WorkoutHeader,
    Callout,
    ExerciseTable
  },
  props: {
    workout: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .workout-wrapper {
    margin: 2rem 0 1rem;
  }
</style>
