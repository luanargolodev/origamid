fetch('./dados.json')
  .then((r) => r.json())
  .then((jsonText) => {
    console.log(jsonText);
  });

const configuracoes = {
  player: 'Google',
  tempo: 25.5,
  aula: '2.1 JavaScript',
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
