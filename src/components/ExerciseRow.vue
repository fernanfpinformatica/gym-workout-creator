<template>
  <tr>
    <td>
      <div class="exercise-img-wrapper">
        <img
            :src="exercise.imgSrc" />
      </div>
    </td>
    <td> </td>
    <td> </td>
    <td v-for="index in weightColumnColespan" :key="index"></td>
  </tr>
</template>

<script>
export default {
  name: 'ExerciseRow',
  props: {
    exercise: Object,
    weightColumnColespan: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td:nth-child(1) {
      width: 15%;
      font-size: .75rem;
  }

  td:nth-child(2),
  td:nth-child(3) {
      width: 10%;
  }

  td:nth-child(n+4) {
      width: 12.5%;
  }

  table tr.half-weight td:nth-last-child(-n + 4) {
      background-image: linear-gradient(to top left,
              white 48%,
              black,
              white 52%);
  }

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
