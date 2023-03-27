const formulario = document.getElementById("meuFormulario");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  if (parseInt(campoB.value) > parseInt(campoA.value)) {
    mensagem.innerText = "Formulário válido!";
    mensagem.style.color = "green";
  } else {
    mensagem.innerText = "Formulário inválido!";
    mensagem.style.color = "red";
  }
});