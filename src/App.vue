<template>
  <div id="app">
    <Workout
      v-for="workout in workouts"
      :key="workout"
      :calloutData="workout.calloutData"
      :workoutTableData="workout.workoutTableData"
    />
  </div>
</template>

<script>
import Workout from './components/Workout.vue'

export default {
  name: 'App',
  components: {
    Workout,
  },
  data () {
    return {
      workouts: [
        {
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
        },
        {
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
                imgSrc: require('./assets/img/Back+Lats/image--006.jpg')
              },
              {
                imgSrc: require('./assets/img/Back+Lats/image--007.jpg')
              },
              {
                imgSrc: require('./assets/img/Back+Lats/image--008.jpg')
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
