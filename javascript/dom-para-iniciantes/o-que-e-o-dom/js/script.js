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
