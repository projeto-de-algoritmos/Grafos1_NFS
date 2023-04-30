const form = document.querySelector("#form");
const resposta = document.querySelector("#resposta");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const initialNode = document.querySelector("#initial-node").value;
  const finalNode = document.querySelector("#final-node").value;

  resposta.textContent = bfs(initialNode, finalNode);
});
