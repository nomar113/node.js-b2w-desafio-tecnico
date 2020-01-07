const Planet = require('../models/Planet')
const axios = require('axios')

module.exports = {
    async store(req, res) {
        const { name, climate, terrain } = req.body;

        let planet = await Planet.findOne({ name })

        if (!planet) {
            await axios.get(`https://swapi.co/api/planets/?search=${name}`).then(
                async (result) => {

                    if (result.data.count === 1 && result.data.results[0].name === name) {
                        let numberOfFilms = result.data.results[0].films.length

                        planet = await Planet.create({ numberOfFilms, name, climate, terrain })

                        return

                    }
                    return res.status(400).json({ message: "This planet don't exists in Star Wars" })
                }
            )
        }

        return res.json(planet)
    },

    async index(req, res) {
        const planets = await Planet.find()

        return res.json(planets)
    },

    async findByName(req, res) {
        const { name } = req.body

        const planet = await Planet.find({ name })

        return res.json(planet)
    },

    async findById(req, res) {
        const { id } = req.params

        const planet = await Planet.findOne({ _id: id })

        return res.json(planet)
    },

    async remove(req, res) {
        const { id } = req.params;

        await Planet.findOneAndDelete({ _id: id })

        return res.send()
    }
}