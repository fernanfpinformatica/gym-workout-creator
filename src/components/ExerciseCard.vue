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
    max-height: 230px;
    max-width: 330px;
  }

  .exercise-name {
    border: 2px solid lightgray;
    min-height: 2rem;
    margin: 1rem 0 .5rem;
  }
</style>
