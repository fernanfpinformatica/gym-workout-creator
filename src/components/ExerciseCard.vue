<template>
  <div class="exercise-img-wrapper">
    <img :src="exercise.imgSrc" />
    <p class="exercise-name">Nombre del ejercicio</p>
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
  .workout-schedule tr td img {
      display: inline-block;
      vertical-align: middle;
      max-height: 110px;
      max-width: 210px;
  }

  .workout-schedule .exercise-divider {
      display: inline-block;
      vertical-align: middle;
      width: 10%;
      font-size: .8rem;
  }

  .workout-schedule tr.exercise td p {
      margin: .1rem 0;
      display: inline-block;
      width: 49%;
      text-align: center;
  }
</style>
