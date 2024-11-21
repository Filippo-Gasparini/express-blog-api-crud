

// richiamo express e il file router
const express = require('express')
const app = express()

// richiamo l'api con la porta
const port = 3000


const postRouter = require('./router/posts');


app.use(express.json()); // Interpreta la mia richiesta come JSON
app.use('/posts', postRouter);

// live server
app.listen(port, () => {
    console.log("Server started...")
})