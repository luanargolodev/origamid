function createButton(text) {
  const numeroSecreto = '0xs33240423es';

  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return Object.freeze({
    text,
    element,
    numeroSecreto,
  });
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar, btnVender);

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  }
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou.`;
};

const programador = Pessoa('Luan');
console.log(programador);
