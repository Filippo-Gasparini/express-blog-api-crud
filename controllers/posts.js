//imposto le funzioni
const posts = require('../data');

// funzione index 

function index(req, res) {
	res.send(`Ecco la lista ${posts}`)
}

// funzione show

function show(req, res) {
	const id = req.params.id
	res.send(`Ecco il singolo post ${id}`)
}

// funzione destroy

function destroy(req, res) {
	const id = req.params.id
	res.send(`Elimino il singolo posts`)
}



// funzione store
function store(req, res) {

	// inserisco un nuovo id

	const newId = posts[posts.length - 1].id + 1;


	console.log(req.body);


	// aggiungo l'oggetto all'array

	//posts.push(newPosts)

	// verifico se corretto

	//console.log(posts)

	// status

	//res.status(201);
	//res.json(newPosts)

	res.json({});

}

module.exports = { index, show, destroy, store }