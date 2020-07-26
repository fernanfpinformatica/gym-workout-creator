const workouts = {
  dividedRoutineDay1: {
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
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492686568706-KFJ3ATRWHGB815ZR95QC/ke17ZwdGBToddI8pDm48kEn1--keXipKm-4-idoUv1JZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEGXIRsulM5lSNpkm0M2UY_ihY2wQ3dDmf1qhKwgeeuLsRpFBYQPJjKYbbHIEz2HLg/Barbell+Back+Squats"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492686351677-R6IKDDG4PVEQ6LLVXSPE/ke17ZwdGBToddI8pDm48kARqa-X33SlNaNw3JvNHHwVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHfRcUcS1K8dSGKeej5DAmGMmCGWlus2V6ACj3-b4NBUpeuVmK9wgfnRXYYbJgKuCM/Leg+Extensions"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1495712960400-76K6387DKCSSFT6OV7PU/ke17ZwdGBToddI8pDm48kAMzkXTlKFeGmrjuZNXNEGpZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGaZLe-qj62sT0QIJrrOGu3Is5lVoRCMti8IPxsD5_39-87Nsj43NRAr6WuWZv5DKs/Barbell+Deadlifts"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492686944120-1GFOTC3E69FESJYWJ4TK/ke17ZwdGBToddI8pDm48kAzjdvmcwTi2DX4rjsrajCFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLp8qhwfVEdyv5A5nbUTGG0QwNSa8-hGa8-UB3zZ1lpX-5hmNjaqsYTvOQnMPB6NE/Lying+Hamstring+Curls"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492639926499-SY6KJ6TN3ZO5W53ZAVLB/ke17ZwdGBToddI8pDm48kA--CZeMMIZvCJ1et5mufG9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF1Hxwm206IZyO_-jfK4JJz9uvwlcFs25qkudxW7Q1inTbuQio6mPVtJnWWmEQSq6s/Flat+Barbell+Chest+Press"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496867578002-TVIMGBGE0XUWKPPZPQ43/ke17ZwdGBToddI8pDm48kLZ8E23_BGVE1N4cWg4liNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEGYK8NzAv3CEfjp0StVGHXJ6o2CrLf4q9qkkbv8XtOWaQvevUbj177dmcMs1F0H-0/Seated+Side+Raises"
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
  dividedRoutineDay2: {
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
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492675344310-NPZ7AD7KAENZR88289ZR/ke17ZwdGBToddI8pDm48kOu_umM5xYaUXSes57xj8BlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGj2fmHITMhmmP-HNrXPt0-KgIKUgpERTQ2FmiuRFqB0zn75LfaXcLI4pX9TKGf4Uw/Wide+Grip+Overhand+Chin+Ups"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492977780522-B0XZ7G2G7Z8NJXOAK308/ke17ZwdGBToddI8pDm48kOv5iFBPFQdiwlf1v2Hdof9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFK_fyPbrxTha5Pv6Il5U_nQpuqaqdqXuT2m9rxv_enXt2OIycBSvnjHYyZtw3j0q8/Seated+Cable+Row"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496316249945-42XE9BZ2L9F7DH2K6HZ0/ke17ZwdGBToddI8pDm48kFJThvQFJS4gbAQUR3Eh5HRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVE57Ad1LWFroL6iS1PVW-8kVfg4CWSwJuk9MRfwRwqxFhur-lC0WofN0YB1wFg-ZW0/Seated+Alternate+Incline+Dumbbell+Biceps+Curl"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1495744263624-VZDQYME6JLJV2E3HGNKS/ke17ZwdGBToddI8pDm48kAvr3TmliytZEAgmKhowQotZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEjDHXKoOtsdMHakPWJWwXztDdEu5fNbxic-qaXJNR7x5u3E9Ef3XsXP1C_826c-iU/Cable+Triceps+Rope+Pushdowns"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496703838014-QPY9XSZ52MW53OXWXGC9/ke17ZwdGBToddI8pDm48kFzXcMEbfyCjMZxv9JCiXzRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHjwbDDWDLudMXFvEaqICfJbvdSUfic4eGRUURHi1ovrVtO8nJtk629tZGIWiyY3XQ/Barbell+Hip+Thrust"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492694440716-PUGX2DR3VXF31M4NAQZS/ke17ZwdGBToddI8pDm48kGwMhzvgMJTIj3vW9d0nnYFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLqTgWebc4w2rfJWkXhPCW-b_TydqXf3-Jwc5vSU73htZM1qSFt4yKtC3mh2eKLuU/Standing+Dumbbell+Calf+Raises"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492687599611-0QQBTNGQ1WB9ZJB287CC/ke17ZwdGBToddI8pDm48kAzjdvmcwTi2DX4rjsrajCFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLp8qhwfVEdyv5A5nbUTGG0QwNSa8-hGa8-UB3zZ1lpX-5hmNjaqsYTvOQnMPB6NE/Seated+Calf+Raises"
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
  dividedRoutineDay3: {
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
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492675344310-NPZ7AD7KAENZR88289ZR/ke17ZwdGBToddI8pDm48kOu_umM5xYaUXSes57xj8BlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGj2fmHITMhmmP-HNrXPt0-KgIKUgpERTQ2FmiuRFqB0zn75LfaXcLI4pX9TKGf4Uw/Wide+Grip+Overhand+Chin+Ups"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492977780522-B0XZ7G2G7Z8NJXOAK308/ke17ZwdGBToddI8pDm48kOv5iFBPFQdiwlf1v2Hdof9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFK_fyPbrxTha5Pv6Il5U_nQpuqaqdqXuT2m9rxv_enXt2OIycBSvnjHYyZtw3j0q8/Seated+Cable+Row"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496316249945-42XE9BZ2L9F7DH2K6HZ0/ke17ZwdGBToddI8pDm48kFJThvQFJS4gbAQUR3Eh5HRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVE57Ad1LWFroL6iS1PVW-8kVfg4CWSwJuk9MRfwRwqxFhur-lC0WofN0YB1wFg-ZW0/Seated+Alternate+Incline+Dumbbell+Biceps+Curl"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1495744263624-VZDQYME6JLJV2E3HGNKS/ke17ZwdGBToddI8pDm48kAvr3TmliytZEAgmKhowQotZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEjDHXKoOtsdMHakPWJWwXztDdEu5fNbxic-qaXJNR7x5u3E9Ef3XsXP1C_826c-iU/Cable+Triceps+Rope+Pushdowns"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1496703838014-QPY9XSZ52MW53OXWXGC9/ke17ZwdGBToddI8pDm48kFzXcMEbfyCjMZxv9JCiXzRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHjwbDDWDLudMXFvEaqICfJbvdSUfic4eGRUURHi1ovrVtO8nJtk629tZGIWiyY3XQ/Barbell+Hip+Thrust"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492694440716-PUGX2DR3VXF31M4NAQZS/ke17ZwdGBToddI8pDm48kGwMhzvgMJTIj3vW9d0nnYFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLqTgWebc4w2rfJWkXhPCW-b_TydqXf3-Jwc5vSU73htZM1qSFt4yKtC3mh2eKLuU/Standing+Dumbbell+Calf+Raises"
        },
        {
          imgSrc: "https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492687599611-0QQBTNGQ1WB9ZJB287CC/ke17ZwdGBToddI8pDm48kAzjdvmcwTi2DX4rjsrajCFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHLp8qhwfVEdyv5A5nbUTGG0QwNSa8-hGa8-UB3zZ1lpX-5hmNjaqsYTvOQnMPB6NE/Seated+Calf+Raises"
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
  dividedRoutineDay4: {
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
          imgSrc: require('./../img/UpperLegs+Glutes/image--063.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--019.jpg')
        },
        {
          imgSrc: require('./../img/Forearms+Calves/image--012.jpg')
        },
        {
          imgSrc: require('./../img/Forearms+Calves/image--013.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--017.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--041.jpg')
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
  dividedRoutineDay5: {
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
          imgSrc: require('./../img/Back+Lats/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--045.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--005.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--014.jpg')
        },
        {
          imgSrc: require('./../img/Shoulders/image--008.jpg')
        },
        {
          imgSrc: require('./../img/Triceps/image--015.jpg')
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
  dividedRoutineDay6: {
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
          imgSrc: require('./../img/Chest/image--009.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--011.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--063.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--019.jpg')
        },
        {
          imgSrc: require('./../img/Biceps/image--030.jpg')
        },
        {
          imgSrc: require('./../img/Triceps/image--015.jpg')
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
  dividedRoutineDay7: {
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
          imgSrc: require('./../img/UpperLegs+Glutes/image--024.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--017.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/image--016.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--024.jpg')
        },
        {
          imgSrc: require('./../img/Forearms+Calves/image--013.jpg')
        },
        {
          imgSrc: require('./../img/Forearms+Calves/image--012.jpg')
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
}

  export default workouts;