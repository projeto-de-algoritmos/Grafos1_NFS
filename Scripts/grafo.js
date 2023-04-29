class Fila {
  constructor() {
    this.fila = [];
  }

  //adiciona o elemento na fila
  enfileira(elemento) {
    this.fila.push(elemento);
  }

  //deleta e retorna o primeiro elemento da fila
  desenfileira() {
    return this.fila.splice(0, 1);
  }

  //retorna true quando vazia
  estaVazia() {
    if (this.fila.length === 0) {
      return true;
    }
    return false;
  }
}

let logFinal = ``;

const grafo = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1, 6, 7],
  4: [2],
  5: [2],
  6: [3],
  7: [3],
};

const visitados = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
};

function bfs(inicio, fim) {
  const fila = new Fila();

  //enfileira o nó inicial e marca como visitado
  fila.enfileira(inicio);
  visitados[inicio] = true;

  logFinal += `BFS pelo vertice ${inicio}

`;
  while (!fila.estaVazia()) {
    const noAtual = fila.desenfileira();
    const vizinhos = grafo[noAtual];

    vizinhos.forEach((vizinho) => {
      if (!visitados[vizinho]) {
        visitados[vizinho] = true;
        fila.enfileira(vizinho);
        logFinal += `${noAtual} -> ${vizinho}
`;
      }
    });
    if (visitados[fim]) {
      break;
    }
  }
  console.log(logFinal);
}

bfs(7, 4);
