// Objetos
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
  nome: "Luan",
  idade: 23,
  possuiFaculdade: true,
};

console.log(pessoa.nome); // Luan
console.log(pessoa.possuiFaculdade); // true

// Métodos
// É uma propriedade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
