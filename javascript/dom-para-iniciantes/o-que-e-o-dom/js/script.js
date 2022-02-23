// Documento Object Model (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdos destes documentos.

console.log(window);
// window é o objeto global do browser e possui diferentes métodos e propriedades

console.log(innerHeight); // retorna a altura do browser

// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

const href = location.href; // Pegar a URL atual
console.log(href);
if (href === "http://127.0.0.1:5500/") {
  console.log("Está na página principal");
} else {
  console.log("Não está na página principal");
}

const titulo = document.querySelector("h1");
const tituloClasses = titulo.classList;

titulo.addEventListener("click", function () {
  console.log("Clicou em ", titulo.innerText);
});

// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector(".ativo");
console.log(ativo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
console.log(innerWidth);
