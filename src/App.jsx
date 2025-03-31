export default function App() {

  //creo una funzione fetchJson che recupera i dati da un url e li restituisce in formato json
  async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
  }

  async function getChefBirthday(id) {
    const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    const chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
    return chef.birthDate;

  }

  getChefBirthday(1)
    .then(dataDiNasita => console.log(dataDiNasita))
    .catch(err => console.error(err.message))

}