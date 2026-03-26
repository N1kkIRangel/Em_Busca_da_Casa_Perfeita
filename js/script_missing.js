const form = document.getElementById("cadastrar");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const pet = {
        nome: document.getElementById("nome").value,
        raca: document.getElementById("raca").value,
        cor: document.getElementById("cor").value,
        idade: document.getElementById("idade").value,
        descricao: document.getElementById("descricao").value,
        data: document.getElementById("data").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        sexo: document.querySelector('input[name="sexo"]:checked')?.value
    };
	
	//salva temporariamente
    sessionStorage.setItem("pet", JSON.stringify(pet));
   
    window.location.href = "desaparecidos.html";
});