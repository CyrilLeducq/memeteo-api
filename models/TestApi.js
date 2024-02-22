const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Définition du schéma pour la météo actuelle
const CurrentWeatherSchema = new Schema({
    location: {
        name: String,
      },
      current: {
        temp_c: Number,
        is_day: Number,
        condition: {
          text: String,
          code: Number
        }
      }
});

// Création du modèle pour les données météorologiques
const TestApiModel = mongoose.model('testApi', CurrentWeatherSchema);

module.exports = TestApiModel;
