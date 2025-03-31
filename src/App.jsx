export default function App() {

  //creo una funzione fetchJson che recupera i dati da un url e li restituisce in formato json
  async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
  }


  async function getChefBirthday(id) {
    let ricetta;
    try {
      ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    }
    catch (err) {
      throw new Error(`Non posso recuperare la ricetta con id ${id}`);
    }
    if (ricetta.message) {
      throw new Error(ricetta.message);
    }


    let chef;
    try {
      chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
    }
    catch (err) {
      throw new Error(`Non posso recuperare lo chef con id ${ricetta.userId}`);
    }
    if (chef.message) {
      throw new Error(chef.message);
    }

    return chef.birthDate;
  }

  (async () => {
    try {
      const dataDiNasita = await getChefBirthday(1);
      console.log("La data di nascita dello chef è: " + dataDiNasita)
    }
    catch (err) {
      console.error(err.message)
    }
  })();
}