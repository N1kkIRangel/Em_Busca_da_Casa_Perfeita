function copiarPix(){
	const pix = document.getElementById("pixkey").innerText;
	navigator.clipboard.writeText(pix);
	alert("Chave Pix copiada!");
}