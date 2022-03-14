const cep = fetch('./style.css');

cep
  .then((r) => r.text())
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.innerHTML = body;
    conteudo.appendChild(style);
  });

const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre
  .then((r) => r.text())
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    const paragrafo = div.querySelector('p');
    document.querySelector('h1').innerText = titulo.innerText;
    document.querySelector('p').innerText = paragrafo.innerText;
  });

const imagem = fetch('./quark.jpg');
imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
  });
