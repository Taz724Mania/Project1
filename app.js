const url = "https://www.dnd5eapi.co/api/monsters"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))