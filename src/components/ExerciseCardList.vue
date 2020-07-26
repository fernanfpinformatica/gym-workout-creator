<template>
  <div class="workout-schedule" border="1" cellspacing="0" cellpadding="0">
      <ExerciseCard
        v-for="exercise in exerciseList"
        :key="exercise.imgSrc"
        :exercise="exercise"
      />
  </div>
</template>

<script>
import ExerciseCard from './ExerciseCard.vue'

export default {
  name: 'ExerciseCardList',
  components: {
    ExerciseCard
  },
  props: {
    exerciseList: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
