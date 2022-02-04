// Protótipo e Herança
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
};

console.log(menu.hasOwnProperty("width"));
console.log(menu.hasOwnProperty("height"));

// hasOwnProperty é um método de Object

var dados = {
  nome: "Luan",
  sobrenome: "Argolo",
  idade: 23,
  cidade: "Ilhéus",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
