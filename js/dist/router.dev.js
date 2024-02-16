"use strict";

var landingPage = document.querySelector("#landingPage");
var visitorHomePage = document.querySelector("#visitorPage");
var visitorListingPage = document.querySelector("#visitorListingPage");
var artistHomePage = document.querySelector("#artistHomePage");
var artistItemPage = document.querySelector("#artistItemPage");
var auctionPage = document.querySelector("#auctionItemsPage");

function routeFunction() {
  landingPage.style.display = "none";
  visitorHomePage.style.display = "none";
  visitorListingPage.style.display = "none";
  artistHomePage.style.display = "none";
  artistItemPage.style.display = "none";
  auctionPage.style.display = "none";
  var hash = location.hash;

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