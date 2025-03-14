// Array para armazenar os nomes dos amigos
let amigos = [];

// Captura os elementos do DOM
const inputNome = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultadoSorteio = document.querySelector("#resultado");

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nome = inputNome.value.trim(); // Captura e remove espaços extras

  if (nome === "") {
      alert("Por favor, digite um nome válido.");
      return;
  }

  if (amigos.includes(nome)) {
      alert("Este nome já foi adicionado!");
      return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Atualiza a interface com a nova lista
  atualizarLista();

  // Limpa o campo de entrada
  inputNome.value = "";
  inputNome.focus();
}