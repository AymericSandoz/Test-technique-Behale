const mongoose = require("mongoose");

const workout = mongoose.Schema({
  types: { type: String },
  intensity: { type: String, required: true },
});

module.exports = mongoose.model("workout_types", postSchema);

const sports = {
  1: {
    name: "Musculation",
    description: "Entraînement de force pour développer la masse musculaire",
  },
  2: {
    name: "Cardio",
    description:
      "Entraînement d'endurance pour améliorer la condition physique",
  },
  3: {
    name: "Hit",
    description:
      "Entraînement à haute intensité pour brûler des calories et augmenter la résistance",
  },
  4: {
    name: "Yoga",
    description:
      "Practique de postures et de respiration pour améliorer la flexibilité et la relaxation",
  },
  5: {
    name: "Natation",
    description:
      "Sport d'endurance utilisant la nage comme moyen de se déplacer dans l'eau",
  },
  6: {
    name: "Danse",
    description:
      "Activité physique consistant à exécuter des mouvements rythmés en musique",
  },
};
