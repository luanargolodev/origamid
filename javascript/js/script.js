// Escopo Léxico

// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = "Programador";

function dados() {
  var nome = "Luan";
  var idade = 23;
  function outroDados() {
    var endereco = "Ilhéus";
    var idade = 23;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outroDados();
}

console.log(dados()); // Retorna 'Luan, 23, Ilhéus, Programador
// outroDados(); // Retorna um erro
