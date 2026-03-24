const form = document.getElementById("cadastrar");

form.addEventListener("submit", function(event) {
	
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const raca = document.getElementById("raca").value;
    const cor = document.getElementById("cor").value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value; //explicar
    const idade = document.getElementById("idade").value;
    const descricao = document.getElementById("descricao").value;
    const data = document.getElementById("data").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const foto = document.getElementById("foto").files[0]; //explicar

    const reader = new FileReader(); 
    reader.onload = function () {
        
        localStorage.setItem("nome", nome);
        localStorage.setItem("raca", raca);
        localStorage.setItem("cor", cor);
        localStorage.setItem("sexo", sexo);
        localStorage.setItem("idade", idade);
        localStorage.setItem("descricao", descricao);
        localStorage.setItem("data", data);
        localStorage.setItem("email", email);
        localStorage.setItem("telefone", telefone);
        localStorage.setItem("foto", reader.result);
	
	if (foto) {
    reader.readAsDataURL(foto); 
	}
    };

});