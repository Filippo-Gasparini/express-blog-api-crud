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


module.export = { index, show, destroy}