const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')


// Index:
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
})

books.get('/', (req, res) => {
    db.Book.find()
    .then((books) => {
        res.json(foundBooks)
    })
    .catch(err => {
      console.log(err) 
      res.send('error404')
    })
})

books.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }

  db.Place.create(req.body)
  .then(() => {
      res.redirect('/books')
  })
  .catch(err => {
      console.log('err', err)
      res.send('error404')
  })
})


books.put('/:id', (req, res) => {
  res.send('PUT /books/:id stub')
})

books.delete('/:id', (req, res) => {
  res.send('DELETE /books/:id stub')
})


books.post('/:id/rant', (req, res) => {
  res.send('GET /books/:id/ stub')
})



books.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /books/:id/rant/:rantId stub')
})


module.exports = books

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

