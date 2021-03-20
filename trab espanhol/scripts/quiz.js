const quizHandler = () => {
	const respostas = document.querySelectorAll(".resposta");
	let respostasselecionadas = [];
	let total = 0;
	respostas.forEach(element => {
		element.querySelector("input").disabled = true;
		if (element.querySelector("input").checked) {
			respostasselecionadas.push(element);
			total += parseInt(element.querySelector("input").name[8]);
		}
	});
	if (!(total == 15)) {
		alert("Preencha todas as respostas!");
		return;
	}
	respostasselecionadas.forEach(element => {
		element.style.background = "rgba(231,29,54,0.20)";
	});

	for (element in respostas) {
		if (element == 1 || element == 4 || element == 9 || element == 15)
			respostas[element].style.background = "rgba(3,192,60,0.20)";
	}
	//1980
	//Una fiesta que consiste en arrojar tomates entre los participantes.
	//No lastimar a la gente.
	//La Tomatina fue prohibida en el país por no tener relación con ningún elemento religioso.
};
