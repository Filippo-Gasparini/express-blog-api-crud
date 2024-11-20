//console.log('ok')

// richiamo express e il file router

const express = require('express')
const router = express.router
const postsController = require('./controllers')
const post = require('./data')
const port = 3000


// lista dei post

router.get('/', postsController.index)

// richiamo un singolo post

router.get('/post', postsControllers.show)

// elimino un singolo post dalla lista

router.get('/delete', postsControllers.destroy)

