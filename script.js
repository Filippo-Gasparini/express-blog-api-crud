//console.log('ok')

// richiamo express e il file router

const express = require('express')
const app = express()
const port = 3000

const postRouter = require('./router/posts');

app.use(express.json()); // Interpreta la mia richiesta come JSON
app.use('/posts', postRouter);


app.listen(port, () => {
    console.log("Server started...")
})