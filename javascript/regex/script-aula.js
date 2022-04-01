// const texto = 'O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia de 60 a 95 centímetros. O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg.';

// // g = global (vai pegar todos os caracteres)
// // i = case insensitive (vai ignorar letras maiusculas e minusculas)
// // [ab] = irá selecionar todo a ou b
// // [-.] = irá selecionar todo o caracter - ou .
// // . = irá selecionar todos os caracteres menos quebra de linha
// // Ju[nl]ho = irá selecionar todo n ou l
// // [a-z] = irá selecionar todo o caracter de a até z
// // [A-Z] = irá selecionar todo o caracter de A até Z
// // [0-9] = irá selecionar todo o caracter de 0 até 9
// // [A-Za-z0-9] = irá selecionar todo o caracter de A até Z, a até z, 0 até 9
// // [À-Ź] - pegar todos os caracteres acentuados
// // [^a-z] - negando todas as letras minusculas e seleciona o restante
// // \w = irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_] = Apenas letras
// // \W = irá selecionar tudo que não for alfanumérico
// // \d = irá selecionar todo o caracter numérico
// // \D = irá selecionar todo o caracter não numérico
// // \s = irá selecionar todo o espaço em branco
// // \S = irá selecionar todo o caracter não espaço em branco
// // i{X} = irá selecionar todo o caracter X vezes
// // i{X,Y} = irá selecionar todo o caracter X até Y vezes
// // i{X,} = irá selecionar todo o caracter X ou mais vezes
// // * = irá selecionar 0 ou mais caracteres
// // ? = o sinal ? significa que o caracter é opcional, pode ou não existir
// // | = o sinal | significa que o caracter pode ser um ou outro
// // \b = irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w
// // \B = é o contrário do \b
// // ^ = irá selecionar o início da string
// // \n = irá selecionar o final de uma linha

// const regex = /m/g;
// const novaFrase = texto.replace(regex, 'M');
// console.log(novaFrase);

// const regexp = /regexp?/g;
// const frase = 'Qual é o certo, regexp ou regex?'.replace(regexp, 'Regular Expression');
// console.log(frase);

// const regexDigito = /\B\d+\B/gi;
// const fraseDigito = '11_22 33-44 55é66 77e88'.replace(regexDigito, 'X');
// console.log(fraseDigito);

// const regexDigito2 = /^\w+/g;
// const fraseDigito2 = `luan@luanargolo.com
// contato@luanargolo.com`.replace(regexDigito2, 'X');
// console.log(fraseDigito2);

// const regexCep = '\d{5}[\s-]?\d{3}/g';
// const ceps = [
//   '01001-000',
//   '00000 000',
//   '00000000'
// ];

// for (cep of ceps) {
//   console.log(cep, cep.match(regexCep));
// }

// const regexCpf = '\d{3}[\.]?\d{3}[\.]?\d{3}[-]?\d{2}';
// const cpfs = [
//   '000.000.000-00',
//   '000-000-000-00',
//   '000.000.000.00',
//   '000000000-00',
//   '00000000000'
// ];

// for (cpf of cpfs) {
//   console.log(cpf, cpf.match(regexCpf));
// }

// const regexp_ = /\w+/gi;
// const regexp_C = new RegExp('\\w+', 'gi');
// const frase_ = 'JavaScript Linguagem 101';
// console.log(frase_.replace(regexp_, 'X'));
// console.log(frase_.replace(regexp_C, 'X'));

// const regexp = /\w{2,}/g;
// const frase = 'JavaScript, TypeScript e CoffeeScript';
// console.log(regexp.exec(frase));

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 222';
// const regexp = /[A-Za-z]+/g;
// const resultados = frase.match(regexp);
// const resultados = frase.split(regexp);
// console.log(resultados);

// const tags = `
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
// `;

// console.log(tags.replace(/(?<=<\/?)\w+/g, 'div'));

const emails = `
  joao@homail.com.br
  marta@ggmail.com.br
  bruna@outlook.com.br
`;

const regexp = /(\w+@)([\w.]+)/g;

const resultado = emails.replace(regexp, function(...args) {
  console.log(args);
  return '$1X';
});

console.log(resultado);