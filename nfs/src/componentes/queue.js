export default class Fila {
  constructor() {
    this.itens = [];
  }

  // Adiciona um elemento ao final da fila
  enfileirar(elemento) {
    this.itens.push(elemento);
  }

  // Remove o primeiro elemento da fila e o retorna
  desenfileirar() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens.shift();
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.itens.length === 0;
  }
}
