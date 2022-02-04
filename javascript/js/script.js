// Palavra-chave this
// this irá fazer uma referência ao próprio objeto

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

console.log(menu.metadeHeight());
// sem o this, seria 60
