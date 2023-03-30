const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input#searchByID");

    console.log(input.value)
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      
      .then((data) => {
        const title = document.getElementById("movieTitle");
        const summary = document.getElementById("movieSummary");

    title.innerText = data.title;
    summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);