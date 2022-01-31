// Parâmetros e Argumentos

// Ao criar uma função, você pode definir parâmetros
// Ao executar uma função, você pode passar Argumentos

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(90, 1.85));
console.log(imc(130, 1.67));

// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhuma também
