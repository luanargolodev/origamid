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
