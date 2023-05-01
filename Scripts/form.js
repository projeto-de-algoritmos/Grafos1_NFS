const form = document.querySelector("#form");
const resposta = document.querySelector("#resposta");
const bfsButton = document.querySelector(".submit-bfs");
const dfsButton = document.querySelector(".submit-dfs");
const restartButton = document.querySelector(".restart-graph");
const initialNode = document.querySelector("#initial-node");
const finalNode = document.querySelector("#final-node");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (initialNode.value < 1 || initialNode.value > 84) {
    alert("O nó inicial não está no mapa!");
  } else if (finalNode.value < 1 || finalNode.value > 84) {
    alert("O nó final não está no mapa!");
  } else {
    bfsButton.style.display = "none";
    dfsButton.style.display = "none";
    restartButton.removeAttribute("style");
  }
});

function rodaBfs() {
  resposta.textContent = bfs(initialNode.value, finalNode.value);
}

function rodaDfs() {
  resposta.textContent = dfs(initialNode.value, finalNode.value);
}
