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
          imgSrc: require('./../img/Chest/image--009.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--011.jpg')
        },
        {
          imgSrc: require('./../img/Shoulders/image--008.jpg')
        },
        {
          imgSrc: require('./../img/Shoulders/image--060.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/image--016.jpg')
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
  calisthenicsBeginner: {
    type: "cards",
    workoutTableData: {
      exercises: [
        {
          imgSrc: require('./../img/Chest/image--053.jpg')
        },
        {
          imgSrc: "https://espowerlifting.com/wp-content/uploads/2018/11/sentadillas-sin-pesos.jpg"
        },
        {
          imgSrc: require('./../img/Abs+Core/image--050.jpg')
        },
        {
          imgSrc: require('./../img/Triceps/image--007.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--010.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--015.jpg')
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
  womenBeginner: {
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
          imgSrc: require('./../img/UpperLegs+Glutes/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--009.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--053.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--010.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--021.jpg')
        },
        {
          imgSrc: require('./../img/Shoulders/image--008.jpg')
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
  womenBeginnerPlanDay1: {
    type: "cards",
    workoutTableData: {
      exercises: [
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--005.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--010.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--063.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--024.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--009.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--045.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--030.jpg')
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
  womenBeginnerPlanDay2: {
    type: "cards",
    workoutTableData: {
      exercises: [
        {
          imgSrc: require('./../img/Shoulders/image--008.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--009.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--011.jpg')
        },
        {
          imgSrc: require('./../img/Forearms+Calves/image--012.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/abs-core-generic.jpg')
        },
        {
          imgSrc: "data:image/png;base64,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"
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
  calisthenicsTest: {
    type: "cards",
    workoutTableData: {
      exercises: [
        {
          imgSrc: require('./../img/Aerobic/jumping-jacks.png')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--010.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--053.jpg')
        },
        {
          imgSrc: require('./../img/Triceps/image--007.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--039.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/image--026.jpg')
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
  women8WeeksPlanDay1: {
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
          title: "20 minutos de cardio (5 min de enfriamiento)",
        },
        {
          imgSrc: require('./../img/Back+Lats/image--009.jpg')
        },
        {
          imgSrc: require('./../img/Biceps/image--030.jpg')
        },
        {
          imgSrc: require('./../img/Triceps/image--017.jpg')
        },
        {
          imgSrc: require('./../img/Shoulders/image--060.jpg')
        },
      ]
    },
    calloutData: [
      {
        title: "🔥 Calentamiento:",
        listItems: [
          "10 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular",
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
  women8WeeksPlanDay2: {
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
          imgSrc: require('./../img/Abs+Core/image--026.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/image--038-iso.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/image--050.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--024.jpg')
        },
        {
          title: "10 minutos de cardio (5 min de enfriamiento)",
        },
      ]
    },
    calloutData: [
      {
        title: "🔥 Calentamiento:",
        listItems: [
          "10 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular",
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
  women8WeeksPlanDay3: {
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
          imgSrc: require('./../img/UpperLegs+Glutes/image--010.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--005.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--017.jpg')
        },
        {
          title: "10 minutos en cinta de correr (5 min de enfriamiento)",
        },
      ]
    },
    calloutData: [
      {
        title: "🔥 Calentamiento:",
        listItems: [
          "10 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular",
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
  women8WeeksPlanDay4: {
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
          title: "20 minutos de cardio (5 min de enfriamiento)",
        },
        {
          imgSrc: require('./../img/Biceps/image--034.jpg')
        },
        {
          imgSrc: require('./../img/Chest/image--006.jpg')
        },
        {
          imgSrc: require('./../img/Triceps/image--015.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--019.jpg')
        },
        {
          imgSrc: require('./../img/Shoulders/image--015.jpg')
        },
      ]
    },
    calloutData: [
      {
        title: "🔥 Calentamiento:",
        listItems: [
          "10 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular",
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
  women8WeeksPlanDay5: {
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
          title: "20 minutos de carrera (5 min de enfriamiento)",
        },
        {
          imgSrc: require('./../img/Abs+Core/image--026.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/image--038-iso.jpg')
        },
        {
          imgSrc: require('./../img/Abs+Core/image--050.jpg')
        },
      ]
    },
    calloutData: [
      {
        title: "🔥 Calentamiento:",
        listItems: [
          "10 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular",
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
  women8WeeksPlanDay6: {
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
          title: "10 minutos en cinta de correr (5 min de enfriamiento)",
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--010.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--036.jpg')
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
          "10 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular",
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
  fullBodyNormal: {
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
          imgSrc: require('./../img/Chest/image--010.jpg')
        },
        {
          imgSrc: require('./../img/Back+Lats/image--005.jpg')
        },
        {
          imgSrc: require('./../img/Biceps/image--030.jpg')
        },
        {
          imgSrc: require('./../img/Triceps/image--015.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--005.jpg')
        },
        {
          imgSrc: require('./../img/UpperLegs+Glutes/image--017.jpg')
        },
      ]
    },
    calloutData: [
      {
        title: "🔥 Calentamiento:",
        listItems: [
          "5 minutos de cardio (bicicleta estática, elíptica o carrera)",
          "2 minutos de movilidad articular",
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