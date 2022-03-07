// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }
//   static blueButton(text) {
//     return new Button(text, 'blue', 'white');
//   }
// }

// const botaoAzul = Button.blueButton('Comprar aqui');
// botaoAzul.appendTo('body');

// const blueButton = new Button('Comprar', 'blue', 'white');
// blueButton.appendTo('body');

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const optionsBlue = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// };

// const blueButton = new Button(optionsBlue);

// console.log(blueButton);

// class Button {
//   constructor(text) {
//     this.text = text;
//   }
//   static create(background) {
//     const elementButton = document.createElement('button');
//     elementButton.style.background = background;
//     elementButton.innerText = 'Clique';
//     return elementButton;
//   }
// }

// const blueButton = Button.create('blue');
// console.log(blueButton);

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
//   static createButton(text, background) {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }

// const optionsBlue = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// };

// const blueButton = new Button(optionsBlue);
// const blueButtonStatic = Button.createButton('Clique', 'blue');
// console.log(blueButtonStatic);

const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(value) {
    this._numero = value;
  },
};

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = 'Banana';
frutas.nova = 'Morango';
console.log(frutas.lista);

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerHTML = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'blue');
console.log(blueButton);
