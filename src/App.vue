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
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492675344310-NPZ7AD7KAENZR88289ZR/ke17ZwdGBToddI8pDm48kOu_umM5xYaUXSes57xj8BlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGj2fmHITMhmmP-HNrXPt0-KgIKUgpERTQ2FmiuRFqB0zn75LfaXcLI4pX9TKGf4Uw/Wide+Grip+Overhand+Chin+Ups",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492977780522-B0XZ7G2G7Z8NJXOAK308/ke17ZwdGBToddI8pDm48kOv5iFBPFQdiwlf1v2Hdof9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFK_fyPbrxTha5Pv6Il5U_nQpuqaqdqXuT2m9rxv_enXt2OIycBSvnjHYyZtw3j0q8/Seated+Cable+Row",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496316249945-42XE9BZ2L9F7DH2K6HZ0/ke17ZwdGBToddI8pDm48kFJThvQFJS4gbAQUR3Eh5HRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVE57Ad1LWFroL6iS1PVW-8kVfg4CWSwJuk9MRfwRwqxFhur-lC0WofN0YB1wFg-ZW0/Seated+Alternate+Incline+Dumbbell+Biceps+Curl",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1495744263624-VZDQYME6JLJV2E3HGNKS/ke17ZwdGBToddI8pDm48kAvr3TmliytZEAgmKhowQotZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEjDHXKoOtsdMHakPWJWwXztDdEu5fNbxic-qaXJNR7x5u3E9Ef3XsXP1C_826c-iU/Cable+Triceps+Rope+Pushdowns",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496703838014-QPY9XSZ52MW53OXWXGC9/ke17ZwdGBToddI8pDm48kFzXcMEbfyCjMZxv9JCiXzRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHjwbDDWDLudMXFvEaqICfJbvdSUfic4eGRUURHi1ovrVtO8nJtk629tZGIWiyY3XQ/Barbell+Hip+Thrust",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492694440716-PUGX2DR3VXF31M4NAQZS/ke17ZwdGBToddI8pDm48kGwMhzvgMJTIj3vW9d0nnYFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLqTgWebc4w2rfJWkXhPCW-b_TydqXf3-Jwc5vSU73htZM1qSFt4yKtC3mh2eKLuU/Standing+Dumbbell+Calf+Raises",
        "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492687599611-0QQBTNGQ1WB9ZJB287CC/ke17ZwdGBToddI8pDm48kAzjdvmcwTi2DX4rjsrajCFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLp8qhwfVEdyv5A5nbUTGG0QwNSa8-hGa8-UB3zZ1lpX-5hmNjaqsYTvOQnMPB6NE/Seated+Calf+Raises",
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
