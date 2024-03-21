document
	.getElementById('inputs-container')
	.addEventListener('keyup', (event) => {
		if (event.target.matches('input')) {
			let input = event.target;
			let valor = parseFloat(input.value);
			let color = valor >= 1 && valor <= 10 ? 'green' : 'red';
			input.style.backgroundColor = color;
			if (valor < 1 || valor > 10) {
				alert('La nota debe estar entre 1 y 10');
			}
		}
	});

function obtenerValorMateria(id) {
	return parseFloat(document.getElementById(id).value);
}

function calcularPromedio() {
	let notas = {
		matematica: obtenerValorMateria('matematica'),
		lengua: obtenerValorMateria('lengua'),
		efsi: obtenerValorMateria('efsi'),
	};

	for (let nota of Object.values(notas)) {
		if (nota < 1 || nota > 10) {
			alert('Alguna nota está fuera del rango permitido');
			return;
		}
	}

	let promedio = (notas.matematica + notas.lengua + notas.efsi) / 3;
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

	for (let nota of Object.values(notas)) {
		if (nota < 1 || nota > 10 || nota  === ''){
			alert('Alguna nota está fuera del rango permitido');
			return;
		}
	}

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
