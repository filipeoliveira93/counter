let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn"); //seleciona os botões

btns.forEach((btn) => {
	// para cada botão adiciona um escutador de evento
	btn.addEventListener("click", (item) => {
		//ao ser clicado vai chamar uma função
		const style = item.currentTarget.classList; //pega a listta de classes do item
		if (style.contains("decrement")) {
			//verifica se no objeto style tem a string decrement
			count--;
		} else if (style.contains("increment")) {
			//verifica se no objeto style tem a string increment
			count++;
		} else {
			//verifica se no objeto style tem a string reset
			count = 0;
		}
		value.textContent = count; //atualiza o texto de value com a variável count
		if (count > 0) {
			value.style.color = "#23d160"; //se count for maior que 0, muda a cor do texto para verde
		}
		if (count < 0) {
			value.style.color = "#ff3860"; //se count for menor que 0, muda a cor do texto para vermelho
		}
		if (count == 0) {
			value.style.color = "#2B2F30"; //se count for igual a 0, muda a cor do texto para preto
		}
	});
});
