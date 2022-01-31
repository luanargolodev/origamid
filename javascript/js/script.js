// Switch

// Com o witch você pode verificar se uma variável é igual à diferentes valores utilizando o case.
// Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação.
// O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul": {
    console.log("Olhe para o Céu.");
    break;
  }
  case "Vermelho": {
    console.log("Olhe para as Rosas.");
    break;
  }
  case "Amarelo": {
    console.log("Olhe para o Sol.");
    break;
  }
  default: {
    console.log("Olhe para o Chão.");
  }
}
