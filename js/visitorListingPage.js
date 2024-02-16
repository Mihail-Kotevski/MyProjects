const cardContainer = document.querySelector("#listedCardsContainer");
const filterBtn = document.querySelector("#filterImage");
const filters = document.querySelector("#listingPageFilters");
const filterCloseBtn = document.querySelector("#xBtn");
const applyBtn = document.querySelector("#applyBtn");
const artName = document.querySelector("#artName");
const artistFilter = document.querySelector("#selectArtist");
const minPriceFilter = document.querySelector("#minPrice");
const maxPriceFilter = document.querySelector("#maxPrice");
const typeOptions = document.querySelector("#selectType");
const secHammerImg = document.querySelector("#secHammerImg");

secHammerImg.addEventListener("click", () => (location.hash = "#auctionPage"));

// grabs artists names
fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      const artists = document.createElement("option");
      artists.setAttribute("value", `${e.name}`);
      artists.innerText = `${e.name}`;

      artistFilter.append(artists);
    });
  });

//  type of art
itemTypes.forEach((type) => {
  const optionType = document.createElement("option");
  optionType.setAttribute("value", `${type}`);
  optionType.innerText = `${type}`;

  typeOptions.append(optionType);
});

// opens filter
function openFilter() {
  filters.style.transform = `translateX(${0}%)`;
  cardContainer.style.display = "none";
  filterBtn.style.display = "none";
}
filterBtn.addEventListener("click", openFilter);

// Close Filter Function
function closeFilterPage() {
  filters.style.transform = `translateX(${100}%)`;
  cardContainer.style.display = "block";
  filterBtn.style.display = "block";
}
filterCloseBtn.addEventListener("click", closeFilterPage);

// Populate Function
function populateFunction() {
  let storagedItems = JSON.parse(localStorage.getItem("storagedItems"));

  let filterTrueItems = storagedItems.filter((el) => el.isPublished === true);
  filterTrueItems.forEach((el, index) =>
    cardContainer.append(populateVisitorPage(el, index))
  );
}
// Function that created card
function populateVisitorPage(arg, index) {
  let card = document.createElement("div");
  card.classList.add("mt-5");
  let img = document.createElement("img");
  img.classList.add("class-img", "w-100");
  img.setAttribute("serc", "");
  let cardText = document.createElement("div");
  cardText.classList.add("card-body", "px-4", "py-2", "boxShadow");

  let nameBtnDiv = document.createElement("div");
  nameBtnDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  let name = document.createElement("h2");
  name.classList.add("d-inline", "cardTitleFont");
  let btn = document.createElement("button");
  btn.classList.add("button", "darkBtn");
  if (index % 2 !== 0) {
    cardText.classList.add("darkCard");
    btn.classList.add("lightBtn");
  } else {
    cardText.classList.add("lightCard");
    btn.classList.add("darkBtn", "boxShadow");
  }

  let h5 = document.createElement("h5");
  let p = document.createElement("span");

  img.setAttribute("src", `${arg.image}`);
  name.textContent = `${arg.artist}`;
  btn.textContent = `$${arg.price}`;
  h5.textContent = `${arg.title}`;
  p.textContent = `${arg.description}`;

  card.append(img);
  card.append(cardText);
  cardText.append(nameBtnDiv);
  nameBtnDiv.append(name);
  nameBtnDiv.append(btn);
  cardText.append(h5);
  cardText.append(p);
  return card;
}

const setLocalStorage = () => {
  let storageData = {
    name: artName.value.toLowerCase(),
    selectArtist: artistFilter.value,
    minPrice: minPriceFilter.value,
    maxPrice: maxPriceFilter.value,
    selectType: typeOptions.value,
  };
  localStorage.setItem("filterValues", JSON.stringify(storageData));
};

applyBtn.addEventListener("click", () => {
  setLocalStorage();

  let storagedItems = JSON.parse(localStorage.getItem("storagedItems"));
  let filterTrueItems = storagedItems.filter((el) => el.isPublished === true);

  let localStorageFilter = JSON.parse(localStorage.getItem("filterValues"));

  let filterArr = filterTrueItems.filter(
    (item) =>
      (localStorageFilter.name
        ? item.title
            .toLowerCase()
            .includes(localStorageFilter.name.toLowerCase())
        : true) &&
      (localStorageFilter.selectArtist
        ? item.artist === localStorageFilter.selectArtist
        : true) &&
      (localStorageFilter.minPrice
        ? item.price >= localStorageFilter.minPrice
        : true) &&
      (localStorageFilter.maxPrice
        ? item.priceSold <= localStorageFilter.maxPrice
        : true) &&
      (localStorageFilter.selectType
        ? item.type === localStorageFilter.selectType
        : true)
  );
  closeFilterPage();
  if (filterArr.length === 0) {
    alert("There are no such cards to be shown");
    openFilter();
  }

  cardContainer.innerHTML = "";
  filterArr.forEach((el, index) =>
    cardContainer.append(populateVisitorPage(el, index))
  );

  artName.value = "";
  artistFilter.value = "";
  minPriceFilter.value = "";
  maxPriceFilter.value = "";
  typeOptions.value = "";
});
