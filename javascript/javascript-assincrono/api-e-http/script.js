fetch('https://pokeapi.co/api/v2/pokemon/1/')
  .then((r) => r.json())
  .then((pokemon) => {
    console.log(pokemon);
  });

const url = 'https://www.google.com';
fetch(url)
  .then((response) => response.text())
  .then((text) => console.log(text));
