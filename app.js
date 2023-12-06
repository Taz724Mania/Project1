// const url = "https://www.dnd5eapi.co/api/monsters"
// fetch(url)
// .then((res) => res.json())
// .then((data) => console.log(data))

const url = "https://www.dnd5eapi.co/api/monsters"
let challengeRating = document.getElementById('challengeRating')
const button = document.getElementById('search')
const resultsList = document.getElementById('results')


button.addEventListener('click', () => {
    const selectedChallengeRating = challengeRating.value;
  
    let urlWithChallengeRating = url;
    if (selectedChallengeRating !== " ") {
      urlWithChallengeRating += `?challenge_rating=${selectedChallengeRating}`;
    }
  
    fetch(urlWithChallengeRating)
      .then(response => response.json())
      .then(data => {
        resultsList.innerHTML = "";
        data.results.forEach(monster => {
          const listItem = document.createElement("li");
          listItem.textContent = monster.name;
          resultsList.appendChild(listItem);
        });
      })
  });