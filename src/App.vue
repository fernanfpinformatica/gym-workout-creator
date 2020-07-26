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
        :tableTitlesList="workoutTableData.titlesList"
        :exerciseList="workoutTableData.exercises"
        :weightColumnColespan=workoutTableData.weightColumnColespan
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
        :tableTitlesList="workoutTableData.titlesList"
        :exerciseList="workoutTableData.exercises"
        :weightColumnColespan=workoutTableData.weightColumnColespan
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
      workoutTableData: {
        titlesList: [
          "Ejercicio",
          "Series-Rep",
          "Descanso",
          "Peso",
        ],
        weightColumnColespan: 4,
        exercises: [
          {
            imgSrc: require('./assets/img/Back+Lats/image--005.jpg')
          },
          {
            imgSrc: require('./assets/img/Back+Lats/image--005.jpg')
          },
          {
            imgSrc: require('./assets/img/Back+Lats/image--005.jpg')
          },
          {
            imgSrc: require('./assets/img/Back+Lats/image--005.jpg')
          },
          {
            imgSrc: require('./assets/img/Back+Lats/image--005.jpg')
          },
          {
            imgSrc: require('./assets/img/Back+Lats/image--005.jpg')
          },
        ]
      },
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
  margin: 1rem 0 2.5rem;
}
</style>
