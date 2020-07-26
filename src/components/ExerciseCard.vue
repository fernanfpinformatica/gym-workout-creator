<template>
  <div class="exercise-wrapper">
    <img :src="exercise.imgSrc" />
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
    max-height: 250px;
    max-width: 350px;
  }

  .exercise-name {
    background-color: lightgray;
    min-height: 1.5rem;
    margin: 1rem 0 .5rem;
  }
</style>
