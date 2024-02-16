"use strict";

var aucItemPrice = document.querySelector(".aucItemPrice");
var aucItemDesc = document.querySelector(".aucItemDesc");
var aucItemtitle = document.querySelector(".aucItemtitle");
var aucItemImage = document.querySelector(".aucItemImg");
var aucItemStartPrice = document.querySelector(".aucItemStartPrice");
var artistHomePageAuction = document.querySelector(".artistHomePageAuction");
var bidList = document.querySelector(".bidList");
var priceSold = document.querySelector(".priceSold");
var aucTimer = document.querySelector(".aucTimer");
var cardFooter = document.querySelector(".cardFooter");
var biddingHistory = document.querySelector(".previousBids");
var bidding = document.querySelector(".bidding");
var bidInp = document.querySelector("#bidInp");
var bidHistoryList = document.querySelector("#bidHistoryList");
var bidBtn = document.querySelector(".bidBtn");

function auctionFunct() {
  var storagedItems = JSON.parse(localStorage.getItem("storagedItems"));
  var aucItemCheck = storagedItems.filter(function (el) {
    return el.isAuctioning === true;
  });

  if (aucItemCheck.length === 1) {
    aucItem.style.display = "block";
    noAucAtm.style.display = "none";
    localStorage.getItem("activeUser") ? bidding.style.display = "none" : bidding.style.display = "block";

    var _index = storagedItems.findIndex(function (el) {
      return el.isAuctioning === true;
    });

    var auctionedItem = storagedItems[_index];
    var startingPrice = Math.floor(auctionedItem.price / 2);
    aucItemPrice.textContent = " $".concat(auctionedItem.price);
    aucItemDesc.textContent = auctionedItem.description;
    aucItemtitle.textContent = auctionedItem.title;
    aucItemImage.src = auctionedItem.image;
    aucItemStartPrice.textContent = "Starting price: $".concat(startingPrice);
    bidInp.value = startingPrice;
  } else {
    aucItem.style.display = "none";
    noAucAtm.style.display = "block";
  }
}

bidBtn.addEventListener("click", function () {
  callBidApi(bidInp);
});

function startTimer() {
  var duration;

  if (+localStorage.getItem("seconds") > 0) {
    duration = +localStorage.getItem("seconds");
  } else {
    duration = 120;
    localStorage.setItem("seconds", duration);
  }

  var timer = duration,
      minutes,
      seconds;
  var timerInterval = setInterval(function () {
    localStorage.setItem("seconds", timer);
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    aucTimer.textContent = minutes + ":" + seconds;
    timer -= 1;

    if (timer <= 0) {
      clearInterval(timerInterval);
      aucTimer.textContent = "00" + ":" + "00";
      localStorage.setItem("seconds", 0);
      bidBtn.disabled = true;
      bidInp.disabled = true;
      artistHomePageAuction.textContent = "Unavailable";
      updateAucItem();
      alert("Your item was sold for $".concat(+localStorage.getItem("bidAmount"), "!"));
      aucItem.style.display = "none";
      noAucAtm.style.display = "block";
      bidHistoryList.innerHTML = "";
    }
  }, 1000);
  bidBtn.addEventListener("click", function () {
    clearInterval(timerInterval);
  });
}

var biddings = [];

function callBidApi(bidInp) {
  var formData = new FormData();
  var bidAPI = "https://projects.brainster.tech/bidding/api";
  formData.append("amount", bidInp.value);
  fetch(bidAPI, {
    method: "POST",
    body: formData
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    biddings.push(data.bidAmount);
    var bid;

    if (biddings.length > 1) {
      index = biddings.length - 2;
      bid = biddings[index];
    } else {
      bid = +bidInp.value;
    }

    if (data.isBidding) {
      localStorage.setItem("bidAmount", data.isBidding);
      var localStorageTimer = +localStorage.getItem("seconds");
      var additionalTime = localStorageTimer + 60;
      localStorage.setItem("seconds", additionalTime);
      artistHomePageAuction.textContent = "$".concat(data.bidAmount);
      startTimer();
      bidHistoryList.appendChild(createBidItem(data.isBidding, data.bidAmount));
    } else {
      localStorage.setItem("bidAmount", bid);
      bidHistoryList.appendChild(createBidItem());
      artistHomePageAuction.textContent = "$".concat(+localStorage.getItem("bidAmount"));
      bidBtn.disabled = true;
      bidInp.disabled = true;
      startTimer();
    }
  });
}

function createBidItem(bool, amount) {
  var li = document.createElement("li");
  li.textContent = bool != true ? "Bidding is Over !" : amount;
  return li;
}

function updateAucItem() {
  var storagedItems = JSON.parse(localStorage.getItem("storagedItems"));
  var index = storagedItems.findIndex(function (el) {
    return el.isAuctioning === true;
  });
  storagedItems[index].isAuctioning = false;
  storagedItems[index].dateSold = new Date();
  storagedItems[index].priceSold = +localStorage.getItem("bidAmount");
  updateLocalStorage(storagedItems);
}