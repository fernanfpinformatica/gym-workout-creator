<template>
  <div id="app">
    <div class="workout-wrapper">
      <WorkoutHeader/>

      <div class="info-callout-wrapper">
        <Callout
          v-for="callout in calloutData"
          :key="callout.title"
          :title="callout.title"
          :listItems="callout.listItems"
        />
      </div>

      <ExerciseTable
        :key="imgSrc"
        :imgSrcList="imgSrc"
        :colspan=4
      />
    </div>
    <div class="workout-wrapper">
      <WorkoutHeader/>

      <div class="info-callout-wrapper">
        <Callout
          v-for="callout in calloutData"
          :key="callout.title"
          :title="callout.title"
          :listItems="callout.listItems"
        />
      </div>

      <ExerciseTable
        :key="imgSrc"
        :imgSrcList="imgSrc"
        :colspan=4
      />
    </div>
  </div>
</template>

<script>
import WorkoutHeader from './components/WorkoutHeader.vue'
import Callout from './components/Callout.vue'
import ExerciseTable from './components/ExerciseTable.vue'

export default {
  name: 'App',
  components: {
    WorkoutHeader,
    Callout,
    ExerciseTable
  },
  data () {
    return {
      imgSrc: [
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492686568706-KFJ3ATRWHGB815ZR95QC/ke17ZwdGBToddI8pDm48kEn1--keXipKm-4-idoUv1JZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEGXIRsulM5lSNpkm0M2UY_ihY2wQ3dDmf1qhKwgeeuLsRpFBYQPJjKYbbHIEz2HLg/Barbell+Back+Squats",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492686351677-R6IKDDG4PVEQ6LLVXSPE/ke17ZwdGBToddI8pDm48kARqa-X33SlNaNw3JvNHHwVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHfRcUcS1K8dSGKeej5DAmGMmCGWlus2V6ACj3-b4NBUpeuVmK9wgfnRXYYbJgKuCM/Leg+Extensions",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1495712960400-76K6387DKCSSFT6OV7PU/ke17ZwdGBToddI8pDm48kAMzkXTlKFeGmrjuZNXNEGpZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGaZLe-qj62sT0QIJrrOGu3Is5lVoRCMti8IPxsD5_39-87Nsj43NRAr6WuWZv5DKs/Barbell+Deadlifts",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492686944120-1GFOTC3E69FESJYWJ4TK/ke17ZwdGBToddI8pDm48kAzjdvmcwTi2DX4rjsrajCFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLp8qhwfVEdyv5A5nbUTGG0QwNSa8-hGa8-UB3zZ1lpX-5hmNjaqsYTvOQnMPB6NE/Lying+Hamstring+Curls",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492639926499-SY6KJ6TN3ZO5W53ZAVLB/ke17ZwdGBToddI8pDm48kA--CZeMMIZvCJ1et5mufG9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF1Hxwm206IZyO_-jfK4JJz9uvwlcFs25qkudxW7Q1inTbuQio6mPVtJnWWmEQSq6s/Flat+Barbell+Chest+Press",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496867578002-TVIMGBGE0XUWKPPZPQ43/ke17ZwdGBToddI8pDm48kLZ8E23_BGVE1N4cWg4liNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEGYK8NzAv3CEfjp0StVGHXJ6o2CrLf4q9qkkbv8XtOWaQvevUbj177dmcMs1F0H-0/Seated+Side+Raises",
      ],
      calloutData: [
        {
          title: "🔥 Calentamiento:",
          listItems: [
            "5 minutos de cardio (bicicleta estática, elíptica o carrera)",
            "2 minutos de movilidad articular"
          ]
        },
        {
          title: "🤸 Después del entrenamiento:",
          listItems: [
            "Estiramientos de cada grupo muscular durante 8-10 minutos"
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.workout-wrapper {
  margin-bottom: 2.5rem;
}
</style>
