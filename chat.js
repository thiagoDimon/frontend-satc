const button = document.getElementById("botaoEnviar");
const input = document.getElementById("inputTexto-enviarMensagem");
const ul = document.getElementById("caixa2");

button.addEventListener("click", function () {
  const text = input.value.trim();
  if (text.length === 0) {
    return;
  }
  const li = document.createElement("li");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  div1.classList.add("voceDiz");
  div2.classList.add("mensagemEnviada");
  p1.textContent = "Você diz:";
  p2.textContent = text;
  div1.appendChild(p1);
  div2.appendChild(p2);
  li.appendChild(div1);
  li.appendChild(div2);
  ul.appendChild(li);
  input.value = "";
});
