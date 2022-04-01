import quadrado from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js";

console.log(quadrado.areaQuadrado(5));
console.log(quadrado.perimetroQuadrado(5));
console.log(numeroAleatorio());

// Desestruturando um objeto
function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.addEventListener("click", handleMouse);

// Desestruturando uma array
const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

// Desestruturando uma array com função
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, perimetro] = useQuadrado;
console.log(lados, perimetro(10));

// ==> REST (...)
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList("Google", "João", "Maria", "Pedro");

// ==> SPREAD
const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [13, ...numeros, 24, 32, 32];
console.log(numeros2);

const carro = {
  cor: "Azul",
  portas: 4,
};
carro.ano = 2020;
console.log(carro);

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus Dados",
];
const precosFilter = precos.filter((p) => p.includes("R$"));
const precosNumeros = precosFilter.map((p) => parseInt(p.replace("R$", "")));
console.log(precosNumeros);

const grupoA = 100;
const grupoB = 200;
if (grupoA > grupoB) {
  console.log("Grupo A ganhou");
} else {
  console.log("Grupo B ganhou");
}

const vencedor = grupoA > grupoB ? "Grupo A ganhou" : "Grupo B ganhou";
console.log(vencedor);

const active = true;
const button = active && "Botão está ativo";
console.log(button);
