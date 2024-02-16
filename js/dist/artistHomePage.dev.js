"use strict";

var artistHomePg = document.querySelector("#artistHomePage");
var soldItems = document.querySelector(".soldItems span");
var income = document.querySelector(".totalIncome span");
var auction = document.querySelector(".auctionWindow");
var last7Btn = document.querySelector("#last7");
var last14Btn = document.querySelector("#last14");
var last32Btn = document.querySelector("#last30");
var lastYear = document.querySelector("#lastYear");
var hamburger = document.querySelector("#burgerImg");
var hamburgerMenu = document.querySelector("#hamburgerMenu");
var homeBtn = document.querySelector("#homeBtn");
var itemsBtn = document.querySelector("#itemsBtn");
var auctionBtn = document.querySelector("#auctionBtn");
var chartsWrapper = document.querySelector(".chartWrapper");
var myChart;
auction.addEventListener("click", function () {
  location.hash = "#auctionPage";
});
homeBtn.addEventListener("click", function () {
  location.hash = "artistHomePage";
});
itemsBtn.addEventListener("click", function () {
  location.hash = "artistItemPage";
  closeFilter(hamburgerMenu);
});
auctionBtn.addEventListener("click", function () {
  location.hash = "auctionPage";
});
hamburger.addEventListener("click", function (event) {
  if (event.target.classList.contains("activeToggler")) {
    event.target.classList.remove("activeToggler");
    closeFilter(hamburgerMenu);
  } else {
    event.target.classList.add("activeToggler");
    openFilter(hamburgerMenu);
  }
}); // Open Burger Function

function openFilter(arg) {
  arg.style.transform = "translateX(".concat(0, "%)");
  arg.style.display = "block";
} // Close Burger Function


function closeFilter(arg) {
  arg.style.transform = "translateX(".concat(100, "%)");
  arg.style.display = "none";
} // Get last Year


var todaysDate = new Date();
var last12Months = [];

function last12MonthsFunct(arg) {
  for (var i = 0; i < 12; i++) {
    var year = todaysDate.getFullYear();
    var month = todaysDate.getMonth() - i;
    var adjustYear = month <= 0 ? year - 1 : year;
    var adjustMonth = month <= 0 ? 12 + month : month;
    var formattedMonth = adjustMonth < 10 ? "0".concat(adjustMonth, " ") : adjustMonth;
    last12Months.push("".concat(adjustYear, "-").concat(formattedMonth));
  }
}

last12MonthsFunct();

function days(presentDay, daysPassed) {
  var arr = [];

  for (var i = 0; i < daysPassed; i++) {
    var startDate = new Date(presentDay);
    var currentDate = startDate.setDate(new Date(presentDay).getDate() - i);
    var formattedDate = formatDate(currentDate);
    arr.push(formattedDate);
  }

  return arr;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

function artistInfo() {
  var currentArtist = localStorage.getItem("activeUser");
  document.querySelector(".artistHeader").textContent = currentArtist;
  var storagedItems = JSON.parse(localStorage.getItem("storagedItems"));
  var filteredArtistItems = storagedItems.filter(function (el) {
    return el.artist === currentArtist;
  });
  var filteredSoldItems = filteredArtistItems.filter(function (el) {
    return el.priceSold;
  });
  filteredArtistItems.forEach(function (item) {});
  var sum = filteredSoldItems.map(function (item) {
    return item.priceSold;
  }).reduce(function (prev, next) {
    return prev + next;
  });
  soldItems.innerHTML = "<h3>".concat(filteredSoldItems.length, "/").concat(filteredArtistItems.length, "</h3>");
  income.innerHTML = "<h3>$".concat(sum, "</h3>");

  function colorBtn(event, arg1, arg2, arg3) {
    event.target.classList.add("activeBtn");
    arg1.classList.remove("activeBtn");
    arg2.classList.remove("activeBtn");
    arg3.classList.remove("activeBtn");
  }

  last7Btn.addEventListener("click", function (event) {
    colorBtn(event, last14Btn, last32Btn, lastYear);
    myChart.data.labels = [1, 2, 3, 4, 5, 6, 7];
    myChart.data.datasets[0].data = counts;
    chartsWrapper.style.height = "".concat(40, "vh");
    myChart.update();
  });
  last14Btn.addEventListener("click", function (event) {
    colorBtn(event, last7Btn, last32Btn, lastYear);
    myChart.data.labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    myChart.data.datasets[0].data = counts;
    myChart.update();
    chartsWrapper.style.height = "".concat(60, "vh");
  });
  last32Btn.addEventListener("click", function (event) {
    colorBtn(event, last14Btn, last7Btn, lastYear);
    myChart.data.labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    myChart.data.datasets[0].data = counts;
    chartsWrapper.style.height = "".concat(120, "vh");
    myChart.update();
  });
  var dateSold = filteredArtistItems.map(function (el) {
    return el.dateSold;
  });
  var counts = [];

  function generatePast30Days() {
    var dates = [];

    for (var i = 30; i >= 0; i--) {
      var date = new Date();
      date.setDate(date.getDate() - i);
      var formattedDate = date.toISOString();
      dates.push(formattedDate);
    }

    return dates;
  } // Example usage:


  var past30Days = generatePast30Days();
  var subStrings30days = past30Days.map(function (el) {
    return el.substring(0, 10);
  });
  var subStringsDateSold = dateSold.map(function (el) {
    return el.substring(0, 10);
  });
  label = subStrings30days.reverse();
  newData = subStringsDateSold.reverse(); // Last Year BTN

  lastYear.addEventListener("click", function (event) {
    colorBtn(event, last14Btn, last32Btn, last7Btn); // Generates last 12 Months

    var currentDate = new Date();
    var last12Months = [];

    for (var i = 0; i < 12; i++) {
      var month = currentDate.getMonth() - i;
      var year = currentDate.getFullYear();

      if (month < 0) {
        month += 12;
        year -= 1;
      }

      var formattedDate = year + "-" + ("0" + (month + 1)).slice(-2);
      last12Months.push(formattedDate);
    }

    var monthsSubStrings30days = last12Months;
    var monthsSubStringsDateSold = dateSold.map(function (el) {
      return el.substring(0, 7);
    });
    console.log(monthsSubStrings30days);
    var monthCounts = [];
    label = monthsSubStrings30days;
    newData = monthsSubStringsDateSold;

    var _loop = function _loop(_i) {
      var number = label[_i];

      if (newData.includes(number)) {
        var count = newData.filter(function (value) {
          return value === number;
        }).length;
        monthCounts.push(count);
      } else {
        monthCounts.push(0);
      }
    };

    for (var _i = 0; _i < label.length; _i++) {
      _loop(_i);
    }

    console.log(monthCounts);
    myChart.data.labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse();
    myChart.data.datasets[0].data = monthCounts;
    chartsWrapper.style.height = "".concat(60, "vh");
    myChart.update();
  });

  var _loop2 = function _loop2(i) {
    var number = label[i];

    if (newData.includes(number)) {
      var count = newData.filter(function (value) {
        return value === number;
      }).length;
      counts.push(count);
    } else {
      counts.push(0);
    }
  };

  for (var i = 0; i < label.length; i++) {
    _loop2(i);
  }

  console.log(counts);
  var data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [{
      label: "# Amount",
      data: counts,
      backgroundColor: "rgb(161, 106, 94)",
      barPercentage: 0.4
    }]
  };
  var config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
      maintainAspectRatio: false,
      responsive: true,
      hoverBackgroundColor: "rgb(255, 0, 0)",
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawOnChartArea: false
          }
        },
        x: {
          grid: {
            drawOnChartArea: false
          }
        }
      }
    }
  };

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(document.querySelector("#myChart"), config);
}