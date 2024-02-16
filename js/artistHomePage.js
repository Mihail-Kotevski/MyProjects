let artistHomePg = document.querySelector("#artistHomePage");
let soldItems = document.querySelector(".soldItems span");
let income = document.querySelector(".totalIncome span");
let auction = document.querySelector(".auctionWindow");
let last7Btn = document.querySelector("#last7");
let last14Btn = document.querySelector("#last14");
let last32Btn = document.querySelector("#last30");
let lastYear = document.querySelector("#lastYear");
let hamburger = document.querySelector("#burgerImg");
let hamburgerMenu = document.querySelector("#hamburgerMenu");
let homeBtn = document.querySelector("#homeBtn");
let itemsBtn = document.querySelector("#itemsBtn");
let auctionBtn = document.querySelector("#auctionBtn");
let chartsWrapper = document.querySelector(".chartWrapper");
let myChart;

auction.addEventListener("click", () => {
  location.hash = "#auctionPage";
});

homeBtn.addEventListener("click", () => {
  location.hash = "artistHomePage";
});
itemsBtn.addEventListener("click", () => {
  location.hash = "artistItemPage";
  closeFilter(hamburgerMenu);
});
auctionBtn.addEventListener("click", () => {
  location.hash = "auctionPage";
});
hamburger.addEventListener("click", (event) => {
  if (event.target.classList.contains("activeToggler")) {
    event.target.classList.remove("activeToggler");
    closeFilter(hamburgerMenu);
  } else {
    event.target.classList.add("activeToggler");
    openFilter(hamburgerMenu);
  }
});

// Open Burger Function
function openFilter(arg) {
  arg.style.transform = `translateX(${0}%)`;
  arg.style.display = "block";
}

// Close Burger Function
function closeFilter(arg) {
  arg.style.transform = `translateX(${100}%)`;
  arg.style.display = "none";
}

// Get last Year
const todaysDate = new Date();
let last12Months = [];
function last12MonthsFunct(arg) {
  for (let i = 0; i < 12; i++) {
    const year = todaysDate.getFullYear();
    const month = todaysDate.getMonth() - i;
    const adjustYear = month <= 0 ? year - 1 : year;
    const adjustMonth = month <= 0 ? 12 + month : month;
    const formattedMonth = adjustMonth < 10 ? `0${adjustMonth} ` : adjustMonth;
    last12Months.push(`${adjustYear}-${formattedMonth}`);
  }
}
last12MonthsFunct();

function days(presentDay, daysPassed) {
  let arr = [];

  for (let i = 0; i < daysPassed; i++) {
    const startDate = new Date(presentDay);
    const currentDate = startDate.setDate(new Date(presentDay).getDate() - i);
    const formattedDate = formatDate(currentDate);
    arr.push(formattedDate);
  }

  return arr;
}
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

function artistInfo() {
  let currentArtist = localStorage.getItem("activeUser");
  document.querySelector(".artistHeader").textContent = currentArtist;
  let storagedItems = JSON.parse(localStorage.getItem("storagedItems"));

  let filteredArtistItems = storagedItems.filter(
    (el) => el.artist === currentArtist
  );
  let filteredSoldItems = filteredArtistItems.filter((el) => el.priceSold);

  filteredArtistItems.forEach((item) => {});
  let sum = filteredSoldItems
    .map((item) => item.priceSold)
    .reduce((prev, next) => prev + next);

  soldItems.innerHTML = `<h3>${filteredSoldItems.length}/${filteredArtistItems.length}</h3>`;
  income.innerHTML = `<h3>$${sum}</h3>`;

  function colorBtn(event, arg1, arg2, arg3) {
    event.target.classList.add("activeBtn");
    arg1.classList.remove("activeBtn");
    arg2.classList.remove("activeBtn");
    arg3.classList.remove("activeBtn");
  }

  last7Btn.addEventListener("click", (event) => {
    colorBtn(event, last14Btn, last32Btn, lastYear);
    myChart.data.labels = ["01", "02", "03", "04", "05", "06", "07"];
    myChart.data.datasets[0].data = counts;
    chartsWrapper.style.height = `${40}vh`;
    myChart.update();
  });

  last14Btn.addEventListener("click", (event) => {
    colorBtn(event, last7Btn, last32Btn, lastYear);
    myChart.data.labels = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
    ];
    myChart.data.datasets[0].data = counts;
    myChart.update();
    chartsWrapper.style.height = `${60}vh`;
  });

  last32Btn.addEventListener("click", (event) => {
    colorBtn(event, last14Btn, last7Btn, lastYear);
    myChart.data.labels = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ];
    myChart.data.datasets[0].data = counts;
    chartsWrapper.style.height = `${120}vh`;
    myChart.update();
  });

  let dateSold = filteredArtistItems.map((el) => el.dateSold);

  let counts = [];

  function generatePast30Days() {
    let dates = [];

    for (let i = 30; i >= 0; i--) {
      let date = new Date();
      date.setDate(date.getDate() - i);

      let formattedDate = date.toISOString();
      dates.push(formattedDate);
    }

    return dates;
  }

  // Example usage:
  let past30Days = generatePast30Days();
  let subStrings30days = past30Days.map((el) => el.substring(0, 10));
  let subStringsDateSold = dateSold.map((el) => el.substring(0, 10));
  label = subStrings30days.reverse();
  newData = subStringsDateSold.reverse();

  // Last Year BTN
  lastYear.addEventListener("click", (event) => {
    colorBtn(event, last14Btn, last32Btn, last7Btn);

    // Generates last 12 Months
    const currentDate = new Date();
    const last12Months = [];
    for (let i = 0; i < 12; i++) {
      let month = currentDate.getMonth() - i;
      let year = currentDate.getFullYear();
      if (month < 0) {
        month += 12;
        year -= 1;
      }
      const formattedDate = year + "-" + ("0" + (month + 1)).slice(-2);
      last12Months.push(formattedDate);
    }

    let monthsSubStrings30days = last12Months;
    let monthsSubStringsDateSold = dateSold.map((el) => el.substring(0, 7));
    let monthCounts = [];
    label = monthsSubStrings30days;
    newData = monthsSubStringsDateSold;

    for (let i = 0; i < label.length; i++) {
      let number = label[i];
      if (newData.includes(number)) {
        let count = newData.filter((value) => {
          return value === number;
        }).length;
        monthCounts.push(count);
      } else {
        monthCounts.push(0);
      }
    }

    myChart.data.labels = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ].reverse();
    myChart.data.datasets[0].data = monthCounts;
    chartsWrapper.style.height = `${60}vh`;
    myChart.update();
  });

  for (let i = 0; i < label.length; i++) {
    let number = label[i];
    if (newData.includes(number)) {
      let count = newData.filter((value) => {
        return value === number;
      }).length;
      counts.push(count);
    } else {
      counts.push(0);
    }
  }

  const data = {
    labels: ["01", "02", "03", "04", "05", "06", "07"],
    datasets: [
      {
        label: "# Amount",
        data: counts,
        backgroundColor: "rgb(161, 106, 94)",
        barPercentage: 0.4,
      },
    ],
  };

  const config = {
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
            drawOnChartArea: false,
          },
        },
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  };

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(document.querySelector("#myChart"), config);
}
