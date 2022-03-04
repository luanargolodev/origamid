const contato = document.querySelector('#contato');
const dados = {};

function handleKeyUp(event) {
  dados[event.target.name] = event.target.value;
}

contato.addEventListener('change', handleKeyUp);
