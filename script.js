//console.log('ok')

// richiamo express e il file router

const express = require('express')
const router = express.router
const postsController = require('./controllers')



router.get('/', postsController.index)