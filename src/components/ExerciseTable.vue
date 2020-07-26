<template>
  <table class="workout-schedule" border="1" cellspacing="0" cellpadding="0" width="99%">
    <tbody>
      <tr class="table-header" id="exercise-table-titles">
        <td v-for="(tableTitle,index) of tableTitlesList" :key="index"
            valign="top"
            :colspan="(index === ( Object.keys(tableTitlesList).length - 1 ) ) ? colspan : 0"
        >
          <p>{{ tableTitle }}</p>
        </td>
      </tr>
      <ExerciseRow
        v-for="img in imgSrcList"
        :key="img"
        :imgSrc="img"
        :colspan="colspan"
      />
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
    tableTitlesList: Array,
    imgSrcList: Array,
    colspan: Number,
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
