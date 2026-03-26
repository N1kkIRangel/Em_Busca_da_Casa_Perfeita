const form = document.getElementById("cadastrar");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const raca = document.getElementById("raca").value;
    const cor = document.getElementById("cor").value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    const idade = document.getElementById("idade").value;
    const descricao = document.getElementById("descricao").value;
    const data = document.getElementById("data").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const foto = document.getElementById("foto").files[0];
    const reader = new FileReader();

    if (foto) {
        reader.onload = function () {

            
            sessionStorage.setItem("nome", nome);
            sessionStorage.setItem("raca", raca);
            sessionStorage.setItem("cor", cor);
            sessionStorage.setItem("sexo", sexo);
            sessionStorage.setItem("idade", idade);
            sessionStorage.setItem("descricao", descricao);
            sessionStorage.setItem("data", data);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("telefone", telefone);
            sessionStorage.setItem("foto", reader.result);

            
            window.location.href = "desaparecidos.html";
        };

        reader.readAsDataURL(foto);

    } else {

        sessionStorage.setItem("nome", nome);
        sessionStorage.setItem("raca", raca);
        sessionStorage.setItem("cor", cor);
        sessionStorage.setItem("sexo", sexo);
        sessionStorage.setItem("idade", idade);
        sessionStorage.setItem("descricao", descricao);
        sessionStorage.setItem("data", data);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("telefone", telefone);

        window.location.href = "desaparecidos.html";
    }
});