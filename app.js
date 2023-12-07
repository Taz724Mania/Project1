// const url = "https://www.dnd5eapi.co/api/monsters"
// fetch(url)
// .then((res) => res.json())
// .then((data) => console.log(data))

const url = "https://www.dnd5eapi.co/api/monsters"
let challengeRating = document.getElementById('challengeRating')
const button = document.getElementById('search')
const resultsList = document.getElementById('results')


$(button).click(function() {
    const selectedChallengeRating = $(challengeRating).val();

    let urlWithChallengeRating = url
    if (selectedChallengeRating !== " ") {
      urlWithChallengeRating += `?challenge_rating=${selectedChallengeRating}`
    }
  
    let nameStyle = ' '
    fetch(urlWithChallengeRating)
      .then(response => response.json())
      .then(data => {
        resultsList.innerHTML = ""
        data.results.forEach(monster => {
          const listItem = document.createElement("li")
          listItem.textContent = monster.url
            nameStyle += `<div class="nameStyle"><a href='https://www.dnd5eapi.co${monster.url}'>${monster.name}</a></div>`
        })
        resultsList.innerHTML = nameStyle
      })
      $(window).scroll(function () {
        const scrollY = $(window).scrollTop();
        $("#background").css("background-position", `0 ${scrollY}px`);
      });
    })
    
    