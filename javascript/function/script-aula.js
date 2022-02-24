// const perimetro = new Function("lado", "return lado * 4");
// console.log(perimetro(50));

// function somar(n1, n2) {
//   return n1 + n2;
// }
// console.log(somar(5, 4));
// console.log(somar.length);
// console.log(somar.name);

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// function descricaoCarro() {
//   console.log(this.marca + " " + this.ano);
// }

// descricaoCarro.call({ marca: "Honda", ano: 2015 });

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Uva", "Pêra"];
// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// };

// const ul = new Dom("ul");

// const li = {
//   element: document.querySelector("li"),
// };

// ul.ativo.call(li, "ativo");

// const novoSeletor = {
//   element: document.querySelector("li"),
// };
// Dom.prototype.ativo.call(novoSeletor, "ativar");

// const arrayLike = {
//   0: "Item 1",
//   1: "Item 2",
//   2: "Item 3",
//   length: 3,
// };

// const li = document.querySelectorAll("li");
// const arrayLi = Array.from(li);
// const filtro = Array.prototype.filter.call(li, (item) => {
//   console.log(item.classList.contains("ativo"));
//   return true;
// });
// console.log(filtro);
// console.log(li);

// const numeros = [33, 232, 33, 434, 54, 5424, 4];
// console.log(Math.max.apply(null, numeros));
// console.log(Math.max.call(null, 3, 4, 5, 6, 7, 20));

// function itemPossuiAtivo(item) {
//   return item.classList.contains("ativo");
// }
// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);
// console.log(filtro1);
// console.log(filtro2);

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};
console.log(carro.acelerar(100, 20));

const honda = {
  marca: "Honda",
};
const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(200, 100));

function imc(altura, peso) {
  return peso / (altura * altura);
}
const imc180 = imc.bind(null, 1.8);

console.log(imc(1.8, 70));
console.log(imc180(70));
