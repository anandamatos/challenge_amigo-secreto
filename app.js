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
      alert("Por favor, insira um nome.");
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

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach((nome) => {
      const li = document.createElement("li");
      li.textContent = nome;
      listaAmigos.appendChild(li);
  });
}
