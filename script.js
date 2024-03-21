document
	.getElementById('inputs-container')
	.addEventListener('keyup', (event) => {
		if (event.target.matches('input')) {
			let input = event.target;
			let valor = parseFloat(input.value);
			let color = valor >= 1 && valor <= 10 ? 'green' : 'red';
			input.style.backgroundColor = color;
		}
	});

function obtenerValorMateria(id) {
	return parseFloat(document.getElementById(id).value);
}

function calcularPromedio() {
	let matematica = obtenerValorMateria('matematica');
	let lengua = obtenerValorMateria('lengua');
	let efsi = obtenerValorMateria('efsi');

	let promedio = (matematica + lengua + efsi) / 3;
	let resultadoDiv = document.getElementById('resultado');

	resultadoDiv.innerHTML = 'El promedio del alumno es: ' + promedio.toFixed(2);
	resultadoDiv.style.color = promedio >= 6 ? 'green' : 'red';
}

function mostrarMateriaMayorNota() {
	let notas = {
		matematica: obtenerValorMateria('matematica'),
		lengua: obtenerValorMateria('lengua'),
		efsi: obtenerValorMateria('efsi'),
	};

	let maxNota = Math.max(...Object.values(notas));
	let materias = [];

	for (let materia in notas) {
		if (notas[materia] === maxNota) {
			materias.push(materia);
		}
	}

	let resultadoDiv = document.getElementById('resultado');
	resultadoDiv.innerHTML =
		'La(s) materia(s) con mayor nota es(son): ' + materias.join(', ');
	resultadoDiv.style.color = 'blue';
}
