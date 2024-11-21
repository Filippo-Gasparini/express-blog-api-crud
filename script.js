//console.log('ok')

// richiamo express e il file router

const express = require('express')
const app = express()
const router = express.Router()
const postsController = require('./controllers')
const post = require('./data')
const port = 3000


// lista dei post

router.get('/', postsController.index)

// richiamo un singolo post

router.get('/:id', postsController.show)

// elimino un singolo post dalla lista

router.delete('/:id', postsController.destroy)


// app.get('/store', (req,res) => {
    //     res.send('Questa è la rotta')
    //     console.log(res)
// })
    

app.use('/posts', router);
app.listen(port, () => {
    console.log("Server started...")
})

