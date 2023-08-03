let id = window.location.search.slice(2);
let allData = document.querySelector(".all__data");
function about() {
  let overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hiddin");
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=8c8f0b3f`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      overlay.classList.toggle("hiddin");
      allData.innerHTML = `
      <div class="top__data">
      <div class="right__data">
        <img src= ${data.Poster} alt="top-img" />
      </div>
      <div class="left__data">
        <div class="data__title">
          <h4>Title:</h4>
          <span class="title">${data.Title}</span>
        </div>
        <div class="data__year">
          <p>Year:</p>
          <span class="year">${data.Year}</span>
        </div>
        <div class="data__time">
          <p>Rountime:</p>
          <span class="time">${data.Runtime}</span>
        </div>
        <div class="data__awards">
          <p>Awards:</p>
          <span class="awards">${data.Awards}</span>
        </div>
        <div class="data__country">
          <p>Country:</p>
          <span class="country">${data.Country}</span>
        </div>
        <div class="data__actors">
          <p>Actors:</p>
          <span class="actors">${data.Actors}</span>
        </div>
        <div class="data__language">
          <p>Language:</p>
          <span class="language">${data.Language}</span>
        </div>
        <div class="data__genre">
          <p>Genre:</p>
          <span class="genre">${data.Genre}</span>
        </div>
        <div class="data__genre">
          <p>Film ID:</p>
          <span class="genre">${data.imdbID}</span>
        </div>
      </div>
    </div>
    <div class="bottom__data">
          ${data.Plot}
    </div>
      `;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
      overlay.classList.toggle("hiddin");
    });
}
about();
