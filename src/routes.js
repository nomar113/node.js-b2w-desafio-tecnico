const express = require('express')

const PlanetController = require('./controller/PlanetController')

const routes = express.Router()

routes.post('/planets', PlanetController.store)
routes.get('/planets', PlanetController.index)
routes.post('/planets/find-by-name', PlanetController.findByName)
routes.get('/planets/:id', PlanetController.findById)
routes.delete('/planets/:id', PlanetController.remove)

module.exports = routes