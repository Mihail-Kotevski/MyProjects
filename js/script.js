var activeHoverCoding = document.querySelector(".active-hover-coding");
var activeHoverMarketing = document.querySelector(".active-hover-marketing");
var activeHoverDesign = document.querySelector(".active-hover-design");
var activeHover = document.querySelector(".active");

document.querySelector("#marketing").addEventListener("change", function () {
  hideCards();
  activeHoverCoding.classList.remove("active");
  activeHoverDesign.classList.remove("active");
  if (document.querySelector("#marketing").checked) {
    activeHoverMarketing.classList.add("active");
    var codingCards = document.querySelectorAll(".marketing");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });
    document.querySelector("#coding").checked = false;
    document.querySelector("#design").checked = false;
  } else {
    activeHoverMarketing.classList.remove("active");
    showAllCards();
  }
});
document.querySelector("#coding").addEventListener("change", function () {
  hideCards();
  activeHoverMarketing.classList.remove("active");
  activeHoverDesign.classList.remove("active");
  if (document.querySelector("#coding").checked) {
    activeHoverCoding.classList.add("active");
    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });
    document.querySelector("#marketing").checked = false;
    document.querySelector("#design").checked = false;
  } else {
    activeHoverCoding.classList.remove("active");
    showAllCards();
  }
});
document.querySelector("#design").addEventListener("change", function () {
  hideCards();
  activeHoverMarketing.classList.remove("active");
  activeHoverCoding.classList.remove("active");
  if (document.querySelector("#design").checked) {
    activeHoverDesign.classList.add("active");
    var codingCards = document.querySelectorAll(".design");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });
    document.querySelector("#marketing").checked = false;
    document.querySelector("#coding").checked = false;
  } else {
    activeHoverDesign.classList.remove("active");
    showAllCards();
  }
});
function hideCards() {
  var allCards = document.querySelectorAll(".hide-cards");
  allCards.forEach((card) => {
    card.style.display = "none";
  });
}
function showAllCards() {
  var showAll = document.querySelectorAll(".hide-cards");
  showAll.forEach((card) => {
    card.style.display = "inline-block";
  });
}
// Load More Button
let cards = document.querySelectorAll(".cards");
// let showBtn = document.querySelector("#load-button");
let showBtn = document.querySelector("#show-more");

let shownCards = 6;

document
  .querySelector("#load-button")
  .addEventListener("click", function loadMoreBtn() {
    for (let i = shownCards; i < shownCards + 6; i++) {
      if (cards[i]) {
        cards[i].style.display = "inline-block";
      }
    }
    shownCards += 6;
    if (shownCards >= cards.length) {
      showBtn.style.display = "none";
    }
  });
