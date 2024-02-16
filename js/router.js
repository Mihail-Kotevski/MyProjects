const landingPage = document.querySelector("#landingPage");
const visitorHomePage = document.querySelector("#visitorPage");
const visitorListingPage = document.querySelector("#visitorListingPage");
const artistHomePage = document.querySelector("#artistHomePage");
const artistItemPage = document.querySelector("#artistItemPage");
const auctionPage = document.querySelector("#auctionItemsPage");

function routeFunction() {
  landingPage.style.display = "none";
  visitorHomePage.style.display = "none";
  visitorListingPage.style.display = "none";
  artistHomePage.style.display = "none";
  artistItemPage.style.display = "none";
  auctionPage.style.display = "none";
  let hash = location.hash;
  if (hash === "#visitor") {
    visitorHomePage.style.display = "block";
  } else if (hash === "#visitorListingPage") {
    populateFunction();
    visitorListingPage.style.display = "block";
  } else if (hash === "#artistHomePage") {
    artistHomePage.style.display = "block";
    artistInfo();
  } else if (hash === "#artistItemPage") {
    artistItemPage.style.display = "block";
    artistItemFunct();
  } else if (hash === "#auctionPage") {
    auctionPage.style.display = "block";
    auctionFunct();
  } else {
    landingPage.style.display = "block";
    localStorage.removeItem("activeUser");
  }
}

window.addEventListener("hashchange", routeFunction);
window.addEventListener("load", routeFunction);
