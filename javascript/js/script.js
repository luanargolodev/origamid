// Valores retornados

// Uma função pode retornar qualquer tipo de dado e até outras funções

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// Cuidado, retonar diferentes tipos de dados na mesma função não é uma boa ideia

console.log(terceiraIdade("60"));
