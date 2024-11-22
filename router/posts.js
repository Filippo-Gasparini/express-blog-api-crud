const express = require('express');
const postsController = require('../controllers/posts');

const router = express.Router()

// lista dei post

router.get('/', postsController.index)

// richiamo un singolo post

router.get('/:id',checkTime, postsController.show)

// elimino un singolo post dalla lista

router.delete('/:id', postsController.destroy)

router.post('/', postsController.store);


module.exports = router;

