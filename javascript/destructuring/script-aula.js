const cliente = {
  nome: 'Luan',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Vídeo JS', 'Vídeo HTML'],
    },
    fisicas: {
      cadernos: ['Caderno 1'],
    },
  },
};

const {
  digitais,
  fisicas,
  digitais: { livros, videos },
} = cliente.compras;

console.log(digitais, fisicas, livros, videos);

const _cliente = {
  nome: 'Luan',
  compras: 10,
  github: '@luanargolodev',
};

const { nome, compras, github } = _cliente;
console.log(nome, compras, github);

const frutas = ['Banana', 'Uva', 'Morango'];

// Sem Destructuring
const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
console.log(primeiraFruta, segundaFruta, terceiraFruta);

// Com Destructuring
const [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira);

const _primeiro = 'Item 1';
const _segundo = 'Item 2';
const _terceiro = 'Item 3';
console.log(_primeiro, _segundo, _terceiro);
// ou
const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3'];
console.log(primeiro, segundo, terceiro);

function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);
