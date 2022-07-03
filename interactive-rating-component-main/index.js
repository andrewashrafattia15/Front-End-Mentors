const ratings = document.querySelectorAll(".rating_button");

const submit_button = document.querySelector(".submit_button");
submit_button.addEventListener("click", onSubmit);

// console.log(submit_button);
// console.log(ratings);

let rating_score = 0;

ratings.forEach((button) => {
  button.addEventListener("click", handleRatingClick);
});

function onSubmit() {
  console.log("vjhsbvkjsba");
  console.log(localStorage);
}

function handleRatingClick(event) {
  ratings.forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");
  // console.log(event.target.textContent);
  rating_score = event.target.textContent;
  localStorage.setItem("rating_score", rating_score);
  // console.log(rating_score);
}
