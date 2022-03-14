const somar = (a, b) => a + b;
const quadrado = (a) => a * a;
const dividir = (a, b) => a / b;

console.log(somar(4, 5));
console.log(quadrado(4));
console.log(dividir(10, 2));

const instrumento = 'Violão';
(function () {
  const instrumento = 'Guitarra';
  console.log(instrumento);
})();

console.log(instrumento);
