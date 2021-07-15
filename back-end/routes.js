const express = require('express')
const router = express.Router()
const Movie = require('./models/Movie.model')

// router.get('/', (req, res) => {
//     res.json({ hello: true })
// })

router.get('/listOfMovies', (req, res) => {
    Movie.find().then((movies) => {
        res.json(movies)
    })
})

module.exports = router