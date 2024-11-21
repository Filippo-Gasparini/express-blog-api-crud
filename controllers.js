console.log('controllers')

//imposto le funzioni

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

//creo un nuovo oggetto

const newPosts = {
	id: 6,
	title: "Cheesecake",
	content: `lorem ipsum`,
	image: "Cheesecake.jpeg",
	tags: ["Dolci", "Dolci al cioccolato", "Torte", "Ricette vegetariane", "Ricette al forno"],
}

// aggiungo l'oggetto all'array

posts.push(newPosts)

// verifico se corretto

console.log(posts)

// status

res.status(201);
res.json(newPosts)

}

module.exports = { index, show, destroy, store}