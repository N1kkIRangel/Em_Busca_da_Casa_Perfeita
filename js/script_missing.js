const form = document.getElementById("cadastrar");

//adiciona evento quando clicar em enviar
form.addEventListener("submit",function(event){
	
	//impedir o envio padrão do formulário
	event.preventDefault();
	//paga os valores dos campos
	const nome = document.getElementById("nome").value;
	const cep = document.getElementById("raca").value;
	const email = document.getElementById("cor").value;
	const bairro = document.getElementById("idade").value;
	const cidade = document.getElementById("descricao").value;
	const estado = document.getElementById("data").value;
	const estado = document.getElementById("email").value;
	const estado = document.getElementById("telefone").value;
	
	//sala dados no localStorage
	sessionStorage.setItem("nome", nome);
	sessionStorage.setItem("raca", cep);
	sessionStorage.setItem("cor", email);
	sessionStorage.setItem("idade", bairro);
	sessionStorage.setItem("descricao", cidade);
	sessionStorage.setItem("data", estado);
	sessionStorage.setItem("email", estado);
	sessionStorage.setItem("telefone", estado);
	
	window.location.href="desaparecidos.html";
});