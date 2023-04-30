const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const initialNode = document.querySelector("#initial-node").value;
  const finalNode = document.querySelector("#final-node").value;

  const resposta = document.querySelector("#resposta");
  resposta.textContent = bfs(initialNode, finalNode);
});
