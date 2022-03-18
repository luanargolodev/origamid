/*function perimetroForma(lado, totalLados = 4) {
  const argArray = Array.from(arguments);
  console.log(argArray);
  return lado * totalLados;
}

console.log(perimetroForma(10, 4));
console.log(perimetroForma(10));*/

function perimetroForma(...listaArgumentos) {
  console.log(listaArgumentos);
  listaArgumentos.forEach((item) => console.log(item));
}

perimetroForma(10, 20, 30, 'Oi', 'Teste');

function anunciarGanhadores(premio, ...ganhadores) {
  console.log(ganhadores);
  console.log(arguments);

  ganhadores.forEach((ganhador) => {
    console.log(`${ganhador} ganhou um ${premio}!`);
  });
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];
console.log(comidas);

const numeroMaximo = Math.max(3, 4, 5, 6, 4, 2344, 566, 43);
console.log(numeroMaximo);

const btn = document.querySelectorAll('button');
console.log(btn);

const btnArray = [...btn];
console.log(btnArray);
