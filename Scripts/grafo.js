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
  1: [2, 69],
  2: [1, 3, 69],
  3: [2, 4],
  4: [3, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7, 9],
  9: [8, 10],
  10: [9, 11],
  11: [10, 12],
  12: [11, 13],
  13: [12, 14],
  14: [13, 15],
  15: [14, 16],
  16: [15, 17],
  17: [16, 18],
  18: [17, 19, 70],
  19: [18, 21],
  20: [19, 21],
  21: [20, 22],
  22: [21, 23],
  23: [22, 24],
  24: [23, 25],
  25: [24, 26],
  26: [25, 27],
  27: [26, 28],
  28: [27, 29],
  29: [28, 30],
  30: [29, 31],
  31: [30, 32],
  32: [31, 33],
  33: [32, 34],
  34: [33, 35],
  35: [34, 36],
  36: [35, 37],
  37: [36, 38],
  38: [37, 39],
  39: [38, 40, 84],
  40: [39, 41, 42],
  41: [40, 42],
  42: [41, 43],
  43: [42, 44],
  44: [43, 45],
  45: [44, 46],
  46: [45, 47],
  47: [46, 48],
  48: [47, 49],
  49: [48, 50],
  50: [49, 51, 52],
  51: [50, 52],
  52: [51, 51, 53],
  53: [52, 54],
  54: [53, 55],
  55: [54, 56],
  56: [55, 57, 82],
  57: [56, 58],
  58: [57, 59],
  59: [58, 60],
  60: [59, 61],
  61: [60, 62],
  62: [61, 63],
  63: [62, 64],
  64: [63, 65],
  65: [64, 66],
  66: [65, 67],
  67: [66, 68, 69],
  68: [67],
  69: [1, 2, 67],
  70: [18, 71],
  71: [70, 72],
  72: [71, 73],
  73: [72, 74],
  74: [73, 75],
  75: [74, 76],
  76: [75, 77],
  77: [76, 78],
  78: [77, 79],
  79: [78, 80],
  80: [79, 81],
  81: [80, 82],
  82: [56, 81, 83],
  83: [82, 84],
  84: [39, 84],
};

const visitados = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false,
  26: false,
  27: false,
  28: false,
  29: false,
  30: false,
  31: false,
  32: false,
  33: false,
  34: false,
  35: false,
  36: false,
  37: false,
  38: false,
  39: false,
  40: false,
  41: false,
  42: false,
  43: false,
  44: false,
  45: false,
  46: false,
  47: false,
  48: false,
  49: false,
  50: false,
  51: false,
  52: false,
  53: false,
  54: false,
  55: false,
  56: false,
  57: false,
  58: false,
  59: false,
  60: false,
  61: false,
  62: false,
  63: false,
  64: false,
  65: false,
  66: false,
  67: false,
  68: false,
  69: false,
  70: false,
  71: false,
  72: false,
  73: false,
  74: false,
  75: false,
  76: false,
  77: false,
  78: false,
  79: false,
  80: false,
  81: false,
  82: false,
  83: false,
  84: false,
};

function bfs(inicio, fim) {
  const fila = new Fila();
  const antecessores = {}; // objeto para armazenar antecessores
  antecessores[inicio] = null; // o início não tem antecessor

  //enfileira o nó inicial e marca como visitado
  fila.enfileira(inicio);
  visitados[inicio] = true;

  logFinal += `BFS pelo vertice ${inicio}\n`;
  while (!fila.estaVazia()) {
    const noAtual = fila.desenfileira();
    const vizinhos = grafo[noAtual];

    vizinhos.forEach((vizinho) => {
      if (!visitados[vizinho]) {
        visitados[vizinho] = true;
        antecessores[vizinho] = noAtual; // armazena o antecessor do vizinho
        fila.enfileira(vizinho);
        logFinal += `${noAtual} -> ${vizinho}\n`;
      }
    });

    if (visitados[fim]) {
      break;
    }
  }

  // reconstroi o caminho percorrido do fim até o início
  const caminho = [fim];
  let antecessor = antecessores[fim];
  while (antecessor !== null) {
    caminho.unshift(antecessor); // adiciona o antecessor no começo do caminho
    antecessor = antecessores[antecessor];
  }

  console.log(`Menor caminho de ${inicio} a ${fim}: ${caminho.join(" -> ")}`);
}

const container = document.getElementById("buttons-container"); // substitua "buttons-container" pelo ID do seu contêiner HTML
for (let node in grafo) {
  const button = document.createElement("button");
  button.innerText = node;
  container.appendChild(button);
}



bfs(17, 40);
