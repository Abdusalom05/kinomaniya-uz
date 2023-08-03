let cards = document.querySelector(".cards");
let div = document.querySelector("div");
let form = document.querySelector(".top__header form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = document.querySelector("form #search");
    console.log(inputValue.value);

    down_api(inputValue.value);
  });

function down_api(API) {
  let overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hiddin");
  fetch(`https://www.omdbapi.com/?s=${API}&apikey=8c8f0b3f`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let title = data.Title;
      cards.innerHTML = "";
      data.Search.forEach((element) => {
        console.log(element);
        cards.innerHTML += `
      <a class="card" href="about.html?/${element.imdbID}">
          <div class="card-item">
            <div class="card__img">
              <img src=${element.Poster} alt="card-img" />
            </div>
            <div class="card__body">
              <div class="card__title">${element.Title}</div>
              <div class="card__text">${element.Year}</div>
            </div>
          </div>
        </a>
      `;
      });
      overlay.classList.toggle("hiddin");
    })
    .catch((error) => {
      console.log(error);
      overlay.classList.toggle("hiddin");
    });
}

down_api(arr_generate[random]);
