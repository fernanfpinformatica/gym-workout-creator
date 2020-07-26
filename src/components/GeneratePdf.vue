<template>
  <div class="generate-pdf">
    <button @click="generatePDF()">Download as PDF</button>
  </div>
</template>

<script>
import html2pdf from '../../node_modules/html2pdf.js'

export default {
  name: 'GeneratePdf',
  methods: {
    generatePDF: function generatePDF() {
      var opt = {
        margin:       0,
        filename:     'file.pdf',
        image:        { type: 'png', quality: 1 },
        html2canvas:  { scale: 3 }
      };

    const element = document.documentElement.innerHTML;
    html2pdf().set(opt).from(element).save();
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
