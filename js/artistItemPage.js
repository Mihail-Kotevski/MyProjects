const Itemshamburger = document.querySelector(".burgerImg");
const header = document.querySelector(".artistItemHeader");
const hamburgerItemsMenu = document.querySelector(".hamburgerMenu");
const addNewItem = document.querySelector("#addNewItem");
const addNewItemPage = document.querySelector(".addNewItem");
const ItemshomeBtn = document.querySelector("#itemshomeBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const artistItemWrapper = document.querySelector(".itemPgBody");
let itemsContainer = document.querySelector("#itemsContainer");
const publishedOrNot = document.querySelector("#publishedOrNot");
const titleInp = document.querySelector("#title");
const description = document.querySelector("#description");
const typeOfArt = document.querySelector("#typeOfArt");
const priceArtLabel = document.querySelector("#priceOfArt");
const imgUrl = document.querySelector("#imgUrl");
const newItemBtn = document.querySelector(".newItemBtn");
let editHeader = document.querySelector("#editHeader");
const auctionBtnc = document.querySelector(".auctionBtn");
const getImage = document.querySelector("#getImage");
const openCamera = document.querySelector("#openCamera");
const controls = document.querySelector(".controls");
const cameraOptions = document.querySelector(".video-options>select");
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const screenshotImage = document.querySelector("#newPhoto");
const buttons = [...controls.querySelectorAll("button")];
const aucItem = document.querySelector(".aucItem");
const noAucAtm = document.querySelector(".noAucAtm");
let indexCounter = items.length;
let editMode = false;

// Type Select
itemTypes.forEach((el) => {
  const newItemOption = document.createElement("option");
  newItemOption.setAttribute("value", `${el}`);
  newItemOption.innerText = `${el}`;

  typeOfArt.append(newItemOption);
});
// Update localStorage
function updateLocalStorage(key) {
  localStorage.setItem("storagedItems", JSON.stringify(key));
}
auctionBtnc.addEventListener("click", () => {
  location.hash = "#auctionPage";
});
// Hamburger Menu
Itemshamburger.addEventListener("click", (event) => {
  if (event.target.classList.contains("activeToggler")) {
    event.target.classList.remove("activeToggler");
    closeFilter(hamburgerItemsMenu);
  } else {
    event.target.classList.add("activeToggler");
    openFilter(hamburgerItemsMenu);
  }
});

ItemshomeBtn.addEventListener("click", () => {
  location.hash = "artistHomePage";
  closeFilter(hamburgerItemsMenu);
});

// Executor Function
function artistItemFunct() {
  header.textContent = localStorage.getItem("activeUser");
  let storagedItems = JSON.parse(localStorage.getItem("storagedItems"));

  // Filter and populate functions
  let activeUser = localStorage.getItem("activeUser");
  function activeArtistItemsFilter() {
    return storagedItems.filter((el) => el.artist === activeUser);
  }
  let activeArtistItems = activeArtistItemsFilter();

  function populateFunction(arg) {
    itemsContainer.innerHTML = "";
    arg.forEach((el) => itemsContainer.append(artistItemCard(el)));
  }

  window.addEventListener("load", populateFunction(activeArtistItems));

  function artistItemCard(item) {
    let card = document.createElement("div");
    card.classList.add("cards", "mt-4");
    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = item.image;
    let textWrap = document.createElement("div");
    textWrap.classList.add("card-body", "py-2", "px-4");
    let titleWrap = document.createElement("div");
    titleWrap.classList.add("d-flex", "justify-content-between");
    let title = document.createElement("div");
    let header = document.createElement("p");
    header.classList.add("title", "h5", "m-0");
    header.textContent = item.title;
    let small = document.createElement("small");
    small.textContent = `${item.dateCreated}`.slice(0, 10);
    let price = document.createElement("button");
    price.classList.add("button", "darkBtn", "m-1");
    price.textContent = item.price;
    let text = document.createElement("div");
    text.classList.add("pt-3");
    let span = document.createElement("span");
    span.classList.add("text");
    span.textContent = item.description;
    let cardBtns = document.createElement("div");
    cardBtns.classList.add(
      "cardFooter",
      "d-flex",
      "justify-content-between",
      "p-3"
    );
    let aucBtn = document.createElement("button");
    aucBtn.classList.add("toAuctBtn", "py-1", "px-3");
    aucBtn.textContent = "Send To Auction";
    let publishBtn = document.createElement("button");
    publishBtn.classList.add("publishBtn", "py-1", "px-3");
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn", "py-1", "px-3");
    removeBtn.textContent = "Remove";
    let editBtn = document.createElement("button");
    editBtn.classList.add("editBtn", "py-1", "px-3");
    editBtn.textContent = "Edit";
    const isPublished = item.isPublished === true;
    publishBtn.classList.add("btn-unpublish");

    if (isPublished) {
      publishBtn.innerText = `Unpublish`;
      publishBtn.classList.add("unpublish");
    } else {
      publishBtn.classList.remove("unpublish");
      publishBtn.innerText = `Publish`;
    }

    if (item.isAuctioning) {
      aucBtn.textContent = "On Auction";
    } else {
      aucBtn.textContent = "Send To Auction";
    }

    // Send to Auction
    aucBtn.addEventListener("click", () => {
      let timer = +localStorage.getItem("seconds");
      if (timer === 0) {
        aucItem.style.display = "block";
        noAucAtm.style.display = "none";
        resetAuctioning();
        let activeAuctionBtn = storagedItems.findIndex(
          (el) => el.id === item.id
        );
        storagedItems[activeAuctionBtn].isAuctioning = true;
        if (storagedItems[activeAuctionBtn].isAuctioning) {
          aucBtn.textContent = "On Auction";
        } else {
          aucBtn.textContent = "Send To Auction";
        }
        startTimer();
        updateLocalStorage(storagedItems);
        document.querySelector(".artistHomePageAuction").innerHTML =
          "Available";
      } else {
        alert(
          "There is active auction please wait before auctioning another item."
        );
      }
    });

    function resetAuctioning() {
      storagedItems.forEach((el) => (el.isAuctioning = false));
      updateLocalStorage(storagedItems);
    }

    // Un/Publish Item
    publishBtn.addEventListener("click", publishFunct);
    function publishFunct() {
      if (publishBtn.innerText === "Unpublish") {
        publishBtn.textContent = `Publish`;
        item.isPublished = false;
        publishedOrNot.checked = false;
        publishBtn.classList.remove("unpublish");
      } else if (publishBtn.innerText === "Publish") {
        publishBtn.textContent = `Unpublish`;
        item.isPublished = true;
        publishedOrNot.checked = true;
        publishBtn.classList.add("unpublish");
      }
      updateLocalStorage(storagedItems);
    }
    // Remove Item
    removeBtn.addEventListener("click", () => {
      const removeQuestion = confirm(
        "Are you sure you want to delete this item"
      );
      if (removeQuestion) {
        card.remove();
        let removeCardIndex = storagedItems.findIndex((el) => el.id == item.id);
        storagedItems.splice(removeCardIndex, 1);
        updateLocalStorage(storagedItems);
      }
    });

    // Edit Item
    editBtn.addEventListener("click", () => {
      editMode = true;
      artistItemWrapper.style.display = "none";
      addNewItemPage.style.display = "block";
      newItemBtn.textContent = "Save Edit";
      editHeader.textContent = "Edit Item";
      titleInp.value = item.title;
      description.value = item.description;
      typeOfArt.value = item.type;
      priceArtLabel.value = item.price;
      imgUrl.value = item.image;
      index = storagedItems.findIndex((el) => el.id == item.id);
    });

    card.append(img);
    card.append(textWrap);
    card.append(cardBtns);
    textWrap.append(titleWrap);
    titleWrap.append(title);
    titleWrap.append(price);
    textWrap.append(text);
    title.append(header);
    title.append(small);
    text.append(span);
    cardBtns.append(aucBtn);
    cardBtns.append(publishBtn);
    cardBtns.append(removeBtn);
    cardBtns.append(editBtn);

    return card;
  }

  // Add or Edit item

  newItemBtn.addEventListener("click", () => {
    if (editMode) {
      storagedItems[index].title = titleInp.value;
      storagedItems[index].description = description.value;
      storagedItems[index].type = typeOfArt.value;
      storagedItems[index].price = priceArtLabel.value;
      storagedItems[index].image =
        imgUrl.value === "" ? screenshotImage.src : imgUrl.value;
      storagedItems[index].isPublished = publishedOrNot.checked;
      artistItemWrapper.style.display = "block";
      addNewItemPage.style.display = "none";
      let updatedList = activeArtistItemsFilter();
      populateFunction(updatedList);
      updateLocalStorage(storagedItems);
    } else {
      indexCounter++;
      let date = new Date();
      let newItem = {
        id: +`${indexCounter}`,
        title: title.value,
        description: description.value,
        type: typeOfArt.value,
        image: imgUrl.value === "" ? screenshotImage.src : imgUrl.value,
        price: priceArtLabel.value,
        artist: localStorage.getItem("activeUser"),
        dateCreated: date.toJSON(),
        isPublished: publishedOrNot.checked,
        isAuctioning: false,
        dateSold: "2022-09-06T15:21:41.926Z",
        priceSold: 2030,
      };
      storagedItems.push(newItem);
      updateLocalStorage(storagedItems);
      let updatedList = activeArtistItemsFilter();
      populateFunction(updatedList);
      console.log(storagedItems);
      artistItemWrapper.style.display = "block";
      addNewItemPage.style.display = "none";
      resetValues();
    }
  });
}

// Toggle Add New Item
addNewItem.addEventListener("click", () => {
  resetValues();
  editMode = false;
  artistItemWrapper.style.display = "none";
  addNewItemPage.style.display = "block";
  editHeader.textContent = "Add new Item";
  newItemBtn.textContent = "Add New Item";
});

// Closes the AddNewItem Window
cancelBtn.addEventListener("click", () => {
  artistItemWrapper.style.display = "block";
  addNewItemPage.style.display = "none";
});

// Camera
openCamera.addEventListener("click", () => {
  getImage.style.display = "block";
  addNewItemPage.style.display = "none";
});

// feather.replace();
let streamStarted = false;

const [play, pause, screenshot] = buttons;

const constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440,
    },
  },
};

cameraOptions.onchange = () => {
  const updatedConstraints = {
    ...constraints,
    deviceId: {
      exact: cameraOptions.value,
    },
  };

  startStream(updatedConstraints);
};

play.onclick = () => {
  if (streamStarted) {
    video.play();
    play.classList.add("d-none");
    pause.classList.remove("d-none");
    return;
  }
  if ("mediaDevices" in navigator && navigator.mediaDevices.getUserMedia) {
    const updatedConstraints = {
      ...constraints,
      deviceId: {
        exact: cameraOptions.value,
      },
    };
    startStream(updatedConstraints);
  }
};

const pauseStream = () => {
  video.pause();
  play.classList.remove("d-none");
  pause.classList.add("d-none");
};

const doScreenshot = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  screenshotImage.src = canvas.toDataURL("image/webp");
  screenshotImage.classList.remove("d-none");
  getImage.style.display = "none";
  addNewItemPage.style.display = "block";
  play.classList.remove("d-none");
  pause.classList.add("d-none");
  closeCamera();
};

pause.onclick = pauseStream;
screenshot.onclick = doScreenshot;

const startStream = async (constraints) => {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleStream(stream);
};
function stopStream() {
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
}

const handleStream = (stream) => {
  video.srcObject = stream;
  play.classList.add("d-none");
  pause.classList.remove("d-none");
  screenshot.classList.remove("d-none");
};

const getCameraSelection = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter((device) => device.kind === "videoinput");
  const options = videoDevices.map((videoDevice) => {
    return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
  });
  cameraOptions.innerHTML = options.join("");
};

getCameraSelection();

function resetValues() {
  publishedOrNot.value = "";
  title.value = "";
  description.value = "";
  typeOfArt.value = "";
  priceArtLabel.value = "";
  imgUrl.value = "";
}
// Closes the Camera
function closeCamera() {
  const video = document.querySelector("video");
  const mediaStream = video.srcObject;
  const tracks = mediaStream.getTracks();
  tracks[0].stop();
  tracks.forEach((track) => track.stop());
}
