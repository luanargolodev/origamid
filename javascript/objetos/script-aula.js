const pessoa = new Object({
  nome: "Luan",
});
console.log(pessoa.nome);

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro).init("Honda");
console.log(honda.acelerar());

const ferrari = Object.create(carro).init("Ferrari");
console.log(ferrari.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  rodas: {
    enumerable: true,
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

console.log(moto);

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  "innerHeight"
);
console.log(innerHeightConfig);

console.log(Object.getOwnPropertyNames(Array.prototype));

// const frutas = ["Banana"];
console.log(Object.getPrototypeOf(""));
console.log(Array.prototype);

const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];
console.log(Object.is(frutas1, frutas2));

const carros = {
  marca: "Ford",
  ano: 2018,
};
carros.portas = 4;
carros.marca = "Honda";
console.log(carros);
console.log(Object.isFrozen(carros));
console.log(Object.isExtensible(carros));
console.log(Object.isSealed(carros));

const frutas3 = ["Banana", "Uva"];
console.log(Array.prototype.isPrototypeOf(frutas3));

const frutas4 = ["Banana", "Uva"];
const somar = function (a, b) {
  return a + b;
};
const cCarros = {
  marca: "Ford",
};
console.log(frutas4.toString());
console.log(somar.toString());
console.log(cCarros.toString());

console.log(Object.prototype.toString.call(frutas4));
