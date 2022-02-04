// Tudo é Objeto

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = "Luan";

nome.length; // 4
nome.charAt(1); // u
nome.replace("an", "am"); // 'Luam'
nome; // Luan

var altura = 1.85;
altura.toString(); // '1.85'
altura.toFixed(); // 2 -> arredondamento

// Por um breve momento, o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

// -> Elementos do DOM
var btn = document.querySelector(".btn");

btn.classList.add("azul");
console.log(btn.innerText);
btn.addEventListener("click", function () {
  console.log("clicou!");
});

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM

// # Exercícios

// nomeie 3 propriedades ou métodos de Strings
var sobrenome = "Argolo";
// fixed
// length
// slice

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
// addEventListener
// appendChild
// id
// innerHTML
// className

// busque na web um objeto (método) capaz de interagir com o clip
// clipboard é a parte do seu computador que lida com o CTRL + C (copiar)
// https://clipboardjs.com/
