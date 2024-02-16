const sliderImg = document.querySelectorAll(".slideImg");
const findMasterpieceBtn = document.querySelector("#findMasterpieceBtn");
const hammerImg = document.querySelector("#hammerImg");

hammerImg.addEventListener("click", () => (location.hash = "#auctionPage"));

function visitorHashChange() {
  location.hash = "#visitorListingPage";
}

sliderImg.forEach((el) => {
  el.addEventListener("click", visitorHashChange);
});
findMasterpieceBtn.addEventListener("click", visitorHashChange);
