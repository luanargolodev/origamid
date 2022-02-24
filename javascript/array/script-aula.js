const carros = ["Ford", "Fiat", "VW", "Honda"];
carros.splice(1, 0, "Kia", "Mustang"); // Acrescenta Kia e Mustang após o primeiro e NÃO REMOVE nenhum
console.log(carros);

// [].copyWithin(alvo, inicio, final);
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2));
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(-1));

// [].fill(valor, inicio, final);
console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 0, 2));

// [].concat()
const transporte1 = ["Barco", "Avião"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
console.log(transportes);

// [].includes(), [].indexOf(), [].lastIndexOf()
const linguagens = ["html", "css", "js", "php", "python", "js"];
console.log(linguagens.includes("css"));
console.log(linguagens.includes("ruby"));
console.log(linguagens.indexOf("python"));
console.log(linguagens.indexOf("js"));
console.log(linguagens.lastIndexOf("js"));

// [].join()
console.log(linguagens.join());
console.log(linguagens.join("  "));
console.log(linguagens.join("-_-"));

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
console.log(htmlString);
htmlString = htmlString.join("h1");
console.log(htmlString);

// [].slice()
console.log(linguagens.slice(3));
console.log(linguagens.slice(1, 4));
const cloneLinguagens = linguagens.slice();
console.log(cloneLinguagens);

// [].forEach = item (valor do item da array), index = (index do valor na array)
// array = (array original)
carros.forEach((item) => {
  console.log(item.toUpperCase());
});

// [].map
const novaArray = carros.map((item) => {
  return item.toUpperCase();
});
console.log(novaArray);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => {
  return aula.min;
});

const nomeAulas = aulas.map((aula) => {
  return aula.nome;
});

// [].reduce
const _aulas = [10, 25, 30];

const reduceAulas = _aulas.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0);
console.log(reduceAulas);

const numeros = [10, 3, 6, 65, 35, 9000];

const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
}, 0);
console.log(`Maior número: ${maiorValor}`);

// [].reduceRight
const frutas = ["Banana", "Pêra", "Mamão", "Abacaxi", "Uva"];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

console.log(frutasRight);
console.log(frutasLeft);

// [].some
const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
});
console.log(temUva);

function maiorQue100(numero) {
  return numero > 100;
}

const numeros_ = [6, 43, 22, 88, 101, 3];
const temMaior = numeros_.some(maiorQue100);
console.log(temMaior);

// [].every
const arrayCheias = frutas.every((fruta) => {
  return fruta;
});
console.log(arrayCheias);

const maiorQue3 = numeros_.every((x) => x > 3);
console.log(maiorQue3);

// [].find e [].findIndex
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});
console.log(buscaUva);

const maiorQue45 = numeros_.find((x) => x > 45);
console.log(maiorQue45);

// [].filter
const arrayLimpa = frutas.filter((fruta) => {
  return fruta;
});
console.log(arrayLimpa);

const maior45 = numeros_.filter((x) => x > 45);
console.log(maior45);

const maioresQue15 = aulas.filter((aula) => {
  return aula.min > 15;
});
console.log(maioresQue15);
