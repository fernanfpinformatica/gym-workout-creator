<template>
  <div class="info-callout-cell">
    <div class="info callout">
      <p class="title">{{ title }}</p>
      <ul>
        <li v-for="item in listItems" :key="item.id">
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Callout',
  props: {
    title: String,
    listItems: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
      text-align: center;
      font-weight: bold;
      margin: 0 0 .5rem;
  }

  .info-callout-wrapper {
      margin: 0 auto;
      width: 95%;
      overflow: hidden;
      font-size: 0;
  }

  .info-callout-wrapper .info-callout-cell {
      width: 50%;
      display: inline-block;
      vertical-align: middle;
  }

  .info.callout {
      max-width: 340px;
      padding: .5rem;
      border: 1px solid black;
      background-color: lightgray;
      text-indent: 0.5rem;
      font-size: .8rem;
      max-width: 450px;
      margin: 1rem auto;
      line-height: 0.85;
  }

  .info.callout td p+p {
      text-indent: 1.5rem;
  }

  .info.callout ul {
      margin: 0 30px 0 0;
      padding-inline-start: 30px;
  }

  .info.callout ul li p {
      margin: 0 0 .5rem;
  }
</style>
