async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerHTML = `<h3>${dadosJSON.aula}</h3>`;
  } catch (error) {
    console.error(error);
  }
}
puxarDados();

async function iniciarAsync() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que esta dentro da expressao () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();

  console.log(dadosJSON, clientesJSON);
}
iniciarAsync();
