// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 23;
var idadePrimo = 29;

if (minhaIdade > idadePrimo) {
  console.log("É maior");
} else if (minhaIdade == idadePrimo) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); // 3 - Retorna o último verdadeiro

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("O Brasil é maior que a China.");
} else if (brasil == china) {
  console.log("O Brasil é igual a China.");
} else {
  console.log("A China é maior que o Brasil.");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  // Gato náo é igual a gato. Então = false
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  // 5 > 2 = Verdadeiro
  console.log("Gato" && "Cão"); // Se ambos for verdadeiro, aparece apenas a última verdadeira = Cão
} else {
  console.log("Falso");
}
