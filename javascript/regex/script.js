import ValidarCpf from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).iniciar();

const cpfs = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  })
} 

console.log(limparCPF('121.121.222 33'));

const resultado = elementsInnerText(cpfs);
console.log(formatarCPFS(resultado));

substituirCPFS(cpfs);