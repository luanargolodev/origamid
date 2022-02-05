// Operador Ternário
// Abreviação de condicionais com if e else

var idade = 23;
var diabetes = false;
var podeBeber = idade >= 18 && !diabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

// If Abreviado
// Não é necessário abrir e fechar as chaves ("{}") quando retornamos apenas uma linha de código
var possuiFaculdade = false;
if (possuiFaculdade) console.log("Possui faculdade.");
else console.log("Não possui faculdade.");

// # Exercício
// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito, caso o cliente possua carro e casa e false caso o contrário
var possuiCarro = true;
var possuiCasa = true;
var darCredito =
  possuiCarro && possuiCasa ? "Dar crédito ao cliente" : "Negar crédito";

console.log(darCredito);
