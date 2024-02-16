let aucItemPrice = document.querySelector(".aucItemPrice");
let aucItemDesc = document.querySelector(".aucItemDesc");
let aucItemtitle = document.querySelector(".aucItemtitle");
let aucItemImage = document.querySelector(".aucItemImg");
let aucItemStartPrice = document.querySelector(".aucItemStartPrice");
let artistHomePageAuction = document.querySelector(".artistHomePageAuction");
let bidList = document.querySelector(".bidList");
let priceSold = document.querySelector(".priceSold");
let aucTimer = document.querySelector(".aucTimer");
let cardFooter = document.querySelector(".cardFooter");
let biddingHistory = document.querySelector(".previousBids");
let bidding = document.querySelector(".bidding");
let bidInp = document.querySelector("#bidInp");
let bidHistoryList = document.querySelector("#bidHistoryList");
let bidBtn = document.querySelector(".bidBtn");

function auctionFunct() {
  let storagedItems = JSON.parse(localStorage.getItem("storagedItems"));

  let aucItemCheck = storagedItems.filter((el) => el.isAuctioning === true);
  if (aucItemCheck.length === 1) {
    aucItem.style.display = "block";
    noAucAtm.style.display = "none";
    localStorage.getItem("activeUser")
      ? (bidding.style.display = "none")
      : (bidding.style.display = "block");

    let index = storagedItems.findIndex((el) => el.isAuctioning === true);
    let auctionedItem = storagedItems[index];

    let startingPrice = Math.floor(auctionedItem.price / 2);

    aucItemPrice.textContent = ` $${auctionedItem.price}`;
    aucItemDesc.textContent = auctionedItem.description;
    aucItemtitle.textContent = auctionedItem.title;
    aucItemImage.src = auctionedItem.image;
    aucItemStartPrice.textContent = `Starting price: $${startingPrice}`;
    bidInp.value = startingPrice;

  } else {
    aucItem.style.display = "none";
    noAucAtm.style.display = "block";
  }
}

bidBtn.addEventListener("click", () => {
  callBidApi(bidInp);
});

function startTimer() {
  let duration;
  if (+localStorage.getItem("seconds") > 0) {
    duration = +localStorage.getItem("seconds");
  } else {
    duration = 120;
    localStorage.setItem("seconds", duration);
  }
  let timer = duration,
    minutes,
    seconds;
  const timerInterval = setInterval(() => {
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
      artistHomePageAuction.textContent = `Unavailable`;
      updateAucItem();
      alert(`Your item was sold for $${+localStorage.getItem("bidAmount")}!`);
      aucItem.style.display = "none";
      noAucAtm.style.display = "block";
      bidHistoryList.innerHTML = "";
    }
  }, 1000);
  bidBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
  });
}

let biddings = [];

function callBidApi(bidInp) {
  const formData = new FormData();
  const bidAPI = "https://projects.brainster.tech/bidding/api";
  formData.append("amount", bidInp.value);

  fetch(bidAPI, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      biddings.push(data.bidAmount);

      let bid;
      if (biddings.length > 1) {
        index = biddings.length - 2;
        bid = biddings[index];
      } else {
        bid = +bidInp.value;
      }
      if (data.isBidding) {
        localStorage.setItem("bidAmount", data.isBidding);
        let localStorageTimer = +localStorage.getItem("seconds");
        let additionalTime = localStorageTimer + 60;
        localStorage.setItem("seconds", additionalTime);
        artistHomePageAuction.textContent = `$${data.bidAmount}`;
        startTimer();
        bidHistoryList.appendChild(
          createBidItem(data.isBidding, data.bidAmount)
        );
      } else {
        localStorage.setItem("bidAmount", bid);
        bidHistoryList.appendChild(createBidItem());
        artistHomePageAuction.textContent = `$${+localStorage.getItem(
          "bidAmount"
        )}`;
        bidBtn.disabled = true;
        bidInp.disabled = true;
        startTimer();
      }
    });
}

function createBidItem(bool, amount) {
  let li = document.createElement("li");
  li.textContent = bool != true ? "Bidding is Over !" : amount;
  return li;
}

function updateAucItem() {
  let storagedItems = JSON.parse(localStorage.getItem("storagedItems"));
  let index = storagedItems.findIndex((el) => el.isAuctioning === true);
  storagedItems[index].isAuctioning = false;
  storagedItems[index].dateSold = new Date();
  storagedItems[index].priceSold = +localStorage.getItem("bidAmount");
  updateLocalStorage(storagedItems);
}
