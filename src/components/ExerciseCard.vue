<template>
  <div class="exercise-wrapper">
    <img v-if="!exercise.title" :src="exercise.imgSrc" />
    <p v-if="exercise.title">{{ exercise.title }}</p>
    <div class="exercise-name"></div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exercise: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .exercise-wrapper {
    text-align: center;
  }

  img {
    max-height: 230px;
    max-width: 330px;
  }

  .exercise-name {
    border: 2px solid lightgray;
    min-height: 2rem;
    margin: 1rem .5rem .5rem;
  }
</style>
