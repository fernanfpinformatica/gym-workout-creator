<template>
  <table class="main-header-data" border="1" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td colspan="2">
            <p class="row l">Nombre:</p>
        </td>
      </tr>

      <tr>
        <td class="weekday row m">
            <p></p>
        </td>
        <td class="rm-percent row m">
            <p>% 1RM</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'WorkoutHeader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-header-data {
      margin: 0 auto;
      width: 95%;
  }

  .main-header-data td {
      padding: 0 1rem;
  }

  .main-header-data .rm-percent {
      text-align: right;
  }

  .row.l {
      height: 10px;
      line-height: 10px;
  }

  .row.m {
      height: 5px;
      line-height: 5px;
  }

  .weekday.row {
      width: 60%;
  }
</style>
