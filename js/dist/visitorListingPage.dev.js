"use strict";

var cardContainer = document.querySelector("#listedCardsContainer");
var filterBtn = document.querySelector("#filterImage");
var filters = document.querySelector("#listingPageFilters");
var filterCloseBtn = document.querySelector("#xBtn");
var applyBtn = document.querySelector("#applyBtn");
var artName = document.querySelector("#artName");
var artistFilter = document.querySelector("#selectArtist");
var minPriceFilter = document.querySelector("#minPrice");
var maxPriceFilter = document.querySelector("#maxPrice");
var typeOptions = document.querySelector("#selectType");
var secHammerImg = document.querySelector("#secHammerImg");
secHammerImg.addEventListener("click", function () {
  return location.hash = "#auctionPage";
}); // grabs artists names

fetch("https://jsonplaceholder.typicode.com/users").then(function (res) {
  return res.json();
}).then(function (data) {
  data.forEach(function (e) {
    var artists = document.createElement("option");
    artists.setAttribute("value", "".concat(e.name));
    artists.innerText = "".concat(e.name);
    artistFilter.append(artists);
  });
}); //  type of art

itemTypes.forEach(function (type) {
  var optionType = document.createElement("option");
  optionType.setAttribute("value", "".concat(type));
  optionType.innerText = "".concat(type);
  typeOptions.append(optionType);
}); // opens filter

function openFilter() {
  filters.style.transform = "translateX(".concat(0, "%)");
  cardContainer.style.display = "none";
  filterBtn.style.display = "none";
}

filterBtn.addEventListener("click", openFilter); // Close Filter Function

function closeFilter() {
  filters.style.transform = "translateX(".concat(100, "%)");
  cardContainer.style.display = "block";
  filterBtn.style.display = "block";
}

filterCloseBtn.addEventListener("click", closeFilter); // Populate Function

function populateFunction() {
  var storagedItems = JSON.parse(localStorage.getItem("storagedItems"));
  var filterTrueItems = storagedItems.filter(function (el) {
    return el.isPublished === true;
  });
  filterTrueItems.forEach(function (el, index) {
    return cardContainer.append(populateVisitorPage(el, index));
  });
} // Function that created card


function populateVisitorPage(arg, index) {
  var card = document.createElement("div");
  card.classList.add("mt-5");
  var img = document.createElement("img");
  img.classList.add("class-img", "w-100");
  img.setAttribute("serc", "");
  var cardText = document.createElement("div");
  cardText.classList.add("card-body", "px-4", "py-2", "boxShadow");
  var nameBtnDiv = document.createElement("div");
  nameBtnDiv.classList.add("d-flex", "justify-content-between", "align-items-center");
  var name = document.createElement("h2");
  name.classList.add("d-inline", "cardTitleFont");
  var btn = document.createElement("button");
  btn.classList.add("button", "darkBtn");

  if (index % 2 !== 0) {
    cardText.classList.add("darkCard");
    btn.classList.add("lightBtn");
  } else {
    cardText.classList.add("lightCard");
    btn.classList.add("darkBtn", "boxShadow");
  }

  var h5 = document.createElement("h5");
  var p = document.createElement("span");
  img.setAttribute("src", "".concat(arg.image));
  name.textContent = "".concat(arg.artist);
  btn.textContent = "$".concat(arg.price);
  h5.textContent = "".concat(arg.title);
  p.textContent = "".concat(arg.description);
  card.append(img);
  card.append(cardText);
  cardText.append(nameBtnDiv);
  nameBtnDiv.append(name);
  nameBtnDiv.append(btn);
  cardText.append(h5);
  cardText.append(p);
  return card;
}

var setLocalStorage = function setLocalStorage() {
  var storageData = {
    name: artName.value.toLowerCase(),
    selectArtist: artistFilter.value,
    minPrice: minPriceFilter.value,
    maxPrice: maxPriceFilter.value,
    selectType: typeOptions.value
  };
  localStorage.setItem("filterValues", JSON.stringify(storageData));
};

applyBtn.addEventListener("click", function () {
  setLocalStorage();
  var localStorageFilter = JSON.parse(localStorage.getItem("filterValues"));
  var filterArr = filterTrueItems.filter(function (item) {
    return (localStorageFilter.name ? item.title.toLowerCase().includes(localStorageFilter.name.toLowerCase()) : true) && (localStorageFilter.selectArtist ? item.artist === localStorageFilter.selectArtist : true) && (localStorageFilter.minPrice ? item.price >= localStorageFilter.minPrice : true) && (localStorageFilter.maxPrice ? item.priceSold <= localStorageFilter.maxPrice : true) && (localStorageFilter.selectType ? item.type === localStorageFilter.selectType : true);
  });
  closeFilter();

  if (filterArr.length === 0) {
    alert("There are no such cards to be shown");
    openFilter();
  }

  cardContainer.innerHTML = "";
  filterArr.forEach(function (el, index) {
    return cardContainer.append(populateVisitorPage(el, index));
  });
  artName.value = "";
  artistFilter.value = "";
  minPriceFilter.value = "";
  maxPriceFilter.value = "";
  typeOptions.value = "";
});