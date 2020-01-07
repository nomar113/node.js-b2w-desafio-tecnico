const mongoose = require('mongoose')

const PlanetSchema = new mongoose.Schema({
    name: String,
    climate: String,
    terrain: String,
    numberOfFilms: Number,
})

module.exports = mongoose.model('Planet', PlanetSchema)