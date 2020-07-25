<template>
  <table class="workout-schedule" border="1" cellspacing="0" cellpadding="0" width="99%">
    <tbody>
      <tr class="table-header" id="exercise-table-titles">
        <td valign="top">
          <p>Ejercicio</p>
        </td>
        <td valign="top">
          <p>Series-Rep</p>
        </td>
        <td valign="top">
          <p>Descanso</p>
        </td>
        <td colspan="4" valign="top">
          <p>Peso</p>
        </td>
      </tr>
      <ExerciseRow
        v-for="img in imgSrcList"
        :key="img"
        :imgSrc="img"
        :colspan="colspan"
      />
      <!--
      <tr v-for="img in imgSrcList" v-bind:key="img">
        <ExerciseRow :imgSrc="img" :colspan="colspan"/>
      </tr>
      -->
    </tbody>
  </table>
</template>

<script>
import ExerciseRow from './ExerciseRow.vue'

export default {
  name: 'ExerciseTable',
  components: {
    ExerciseRow
  },
  props: {
    imgSrcList: Array,
    colspan: {
      type: Number,
      default: 4
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #exercise-table-titles td {
      font-size: .9rem;
  }

  .workout-schedule {
    text-align: center;
  }
</style>
