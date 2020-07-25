<template>
  <div id="app">
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
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492639926499-SY6KJ6TN3ZO5W53ZAVLB/ke17ZwdGBToddI8pDm48kA--CZeMMIZvCJ1et5mufG9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF1Hxwm206IZyO_-jfK4JJz9uvwlcFs25qkudxW7Q1inTbuQio6mPVtJnWWmEQSq6s/Flat+Barbell+Chest+Press",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492675344310-NPZ7AD7KAENZR88289ZR/ke17ZwdGBToddI8pDm48kOu_umM5xYaUXSes57xj8BlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGj2fmHITMhmmP-HNrXPt0-KgIKUgpERTQ2FmiuRFqB0zn75LfaXcLI4pX9TKGf4Uw/Wide+Grip+Overhand+Chin+Ups",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492640379861-4YARXK0C5XIKTU2LW2II/ke17ZwdGBToddI8pDm48kGphHHQBDgqAXFtoomGMlsRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEkAsqeApjCRwKqMZmT-ct3icbxu9ZdyFLG1xSIp6h4TIjbgrpQzS2D1wsvCYhefSE/Seated+Dumbbell+Shoulder+Press",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496316249945-42XE9BZ2L9F7DH2K6HZ0/ke17ZwdGBToddI8pDm48kFJThvQFJS4gbAQUR3Eh5HRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVE57Ad1LWFroL6iS1PVW-8kVfg4CWSwJuk9MRfwRwqxFhur-lC0WofN0YB1wFg-ZW0/Seated+Alternate+Incline+Dumbbell+Biceps+Curl",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1493844683178-DZ1MAYUKOM1HJLTMYKFN/ke17ZwdGBToddI8pDm48kPV83lobj4YDXKov937Ci8FZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFvqqedpVUyeluM6UTyt0yR6cUu5seITZd_gvD35ZPUGZXleA9PsoOHujT9UMkA80c/One+Arm+Overhead+Standing+Triceps+Extensions",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1493084263075-NODSRKLSAPA8JS7IQP9Y/ke17ZwdGBToddI8pDm48kHWk_ixjWi6EbIpwdZqLlPVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGPiSYl-QlC9ki6sozNR8vUxJPSCvO27XorCMjdQnVjuKl4Ys1tHh8ZXOc-Io9Ug4o/Oblique+Raises",
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
</style>
