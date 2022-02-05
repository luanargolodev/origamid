// Const e Let no lugar de Var
// A partir de agora vamos utilizar apenas const e let para declararmos variáveis

if (true) {
  var carro = "Fusca";
  console.log(carro);
}

// {} criar um bloco
// Chaves {} criar um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro = "Fusca";
  const ano = 2018;
}
console.log(carro); // 'Carro'
// console.log(ano); // erro: ano is not defined

// For Loop
// Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop
for (let i = 0; i < 10; i++) {
  // console.log(`Número ${i}`);
}

// Const
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código
const mes = "Dezembro";
// mes = "Janeiro"; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 05,
  mes: "Fevereiro",
  ano: 2022,
};

data.dia = 29; // Funciona
data.mes = "Janeiro"; // Funciona
// data = "Janeiro"; // erro

// Let
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável
let ano;
ano = 2022;
ano++;
console.log(ano);

// let ano = 2022; // erro, redeclarou a variável
// Geralmente vamos utilizar o const.

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
console.log(cor);
// console.log(var, marca, portas);
// Var não é uma variável. Const e let não vazam no escopo

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
