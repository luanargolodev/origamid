// Array
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["Switch", "PS4", "Xbox", "3DS"];

console.log(videoGames[0]); // Switch
console.log(videoGames[1]); // PS4
console.log(videoGames[2]); // Xbox

// Acesse um elemento da array utilizando [n]

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("Atari"); // Adiciona ao final da array
videoGames.length; // 4

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

// For Loop
// Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// O for loop possui 3 partes: início, condição e incremento

// While ("enquanto") Loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// O for loop é o mais comum

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}

// Break ("pausar")
// O loop irá parar caso encontre a palavra break

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}
// O loop acima irá parar quando aparecer no console: PS4

// forEach
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuido dinamicamente
// Podemos passar os seguintes parâmetros: item, index e array

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];
frutas.forEach(function (item, index) {
  console.log(item, index);
});

// Não se confunda com a sintaxe

var numero = 0;
var maximo = 10;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

// # Exercícios
// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem: 'O Brasil ganhou a copa de ${ano}'
brasilCampeao.forEach(function (item) {
  console.log(`O Brasil ganhou a copa de ${item}.`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array
var ultimaFruta = frutas[frutas.length - 1];
