"use strict";

const ratings = document.querySelectorAll(".card-front-ratings-rating");
const submitBtn = document.querySelector(".card-front-submit-btn");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const finalRating = document.querySelector(".card-back-final-rating");
const returnBtn = document.querySelector(".card-back-return-btn");

ratings.forEach((rating) => {
  rating.addEventListener("click", function (e) {
    e.preventDefault();
    ratings.forEach((rating) => {
      rating.style.backgroundColor = "";
    });
    rating.style.backgroundColor = "#fb7413";
    rating.style.color = "#fff";
    finalRating.textContent = `You selected ${e.target.textContent} out of 5`;
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (finalRating.textContent) {
    cardFront.classList.add("hidden");
    cardBack.classList.remove("hidden");
  } else {
    alert("choose rating first");
  }
});

returnBtn.addEventListener("click", function (e) {
  e.preventDefault();
  cardFront.classList.remove("hidden");
  cardBack.classList.add("hidden");
  ratings.forEach((rating) => {
    rating.style.backgroundColor = "";
    rating.style.color = "";
  });
  finalRating.textContent = "";
});
