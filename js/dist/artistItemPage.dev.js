"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Itemshamburger = document.querySelector(".burgerImg");
var header = document.querySelector(".artistItemHeader");
var hamburgerItemsMenu = document.querySelector(".hamburgerMenu");
var addNewItem = document.querySelector("#addNewItem");
var addNewItemPage = document.querySelector(".addNewItem");
var ItemshomeBtn = document.querySelector("#itemshomeBtn");
var cancelBtn = document.querySelector(".cancelBtn");
var artistItemWrapper = document.querySelector(".itemPgBody");
var itemsContainer = document.querySelector("#itemsContainer");
var publishedOrNot = document.querySelector("#publishedOrNot");
var titleInp = document.querySelector("#title");
var description = document.querySelector("#description");
var typeOfArt = document.querySelector("#typeOfArt");
var priceArtLabel = document.querySelector("#priceOfArt");
var imgUrl = document.querySelector("#imgUrl");
var newItemBtn = document.querySelector(".newItemBtn");
var editHeader = document.querySelector("#editHeader");
var auctionBtnc = document.querySelector(".auctionBtn");
var getImage = document.querySelector("#getImage");
var openCamera = document.querySelector("#openCamera");
var controls = document.querySelector(".controls");
var cameraOptions = document.querySelector(".video-options>select");
var video = document.querySelector("video");
var canvas = document.querySelector("canvas");
var screenshotImage = document.querySelector("#newPhoto");

var buttons = _toConsumableArray(controls.querySelectorAll("button"));

var aucItem = document.querySelector(".aucItem");
var noAucAtm = document.querySelector(".noAucAtm");
var indexCounter = items.length;
var editMode = false; // Type Select

itemTypes.forEach(function (el) {
  var newItemOption = document.createElement("option");
  newItemOption.setAttribute("value", "".concat(el));
  newItemOption.innerText = "".concat(el);
  typeOfArt.append(newItemOption);
}); // Update localStorage

function updateLocalStorage(key) {
  localStorage.setItem("storagedItems", JSON.stringify(key));
}

auctionBtnc.addEventListener("click", function () {
  location.hash = "#auctionPage";
}); // Hamburger Menu

Itemshamburger.addEventListener("click", function (event) {
  if (event.target.classList.contains("activeToggler")) {
    event.target.classList.remove("activeToggler");
    closeFilter(hamburgerItemsMenu);
  } else {
    event.target.classList.add("activeToggler");
    openFilter(hamburgerItemsMenu);
  }
});
ItemshomeBtn.addEventListener("click", function () {
  location.hash = "artistHomePage";
  closeFilter(hamburgerItemsMenu);
}); // Executor Function

function artistItemFunct() {
  header.textContent = localStorage.getItem("activeUser");
  var storagedItems = JSON.parse(localStorage.getItem("storagedItems")); // Filter and populate functions

  var activeUser = localStorage.getItem("activeUser");

  function activeArtistItemsFilter() {
    return storagedItems.filter(function (el) {
      return el.artist === activeUser;
    });
  }

  var activeArtistItems = activeArtistItemsFilter();

  function populateFunction(arg) {
    itemsContainer.innerHTML = "";
    arg.forEach(function (el) {
      return itemsContainer.append(artistItemCard(el));
    });
  }

  window.addEventListener("load", populateFunction(activeArtistItems));

  function artistItemCard(item) {
    var card = document.createElement("div");
    card.classList.add("cards", "mt-4");
    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = item.image;
    var textWrap = document.createElement("div");
    textWrap.classList.add("card-body", "py-2", "px-4");
    var titleWrap = document.createElement("div");
    titleWrap.classList.add("d-flex", "justify-content-between");
    var title = document.createElement("div");
    var header = document.createElement("p");
    header.classList.add("title", "h5", "m-0");
    header.textContent = item.title;
    var small = document.createElement("small");
    small.textContent = "".concat(item.dateCreated).slice(0, 10);
    var price = document.createElement("button");
    price.classList.add("button", "darkBtn", "m-1");
    price.textContent = item.price;
    var text = document.createElement("div");
    text.classList.add("pt-3");
    var span = document.createElement("span");
    span.classList.add("text");
    span.textContent = item.description;
    var cardBtns = document.createElement("div");
    cardBtns.classList.add("cardFooter", "d-flex", "justify-content-between", "p-3");
    var aucBtn = document.createElement("button");
    aucBtn.classList.add("toAuctBtn", "py-1", "px-3");
    aucBtn.textContent = "Send To Auction";
    var publishBtn = document.createElement("button");
    publishBtn.classList.add("publishBtn", "py-1", "px-3");
    var removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn", "py-1", "px-3");
    removeBtn.textContent = "Remove";
    var editBtn = document.createElement("button");
    editBtn.classList.add("editBtn", "py-1", "px-3");
    editBtn.textContent = "Edit";
    var isPublished = item.isPublished === true;
    publishBtn.classList.add("btn-unpublish");

    if (isPublished) {
      publishBtn.innerText = "Unpublish";
      publishBtn.classList.add("unpublish");
    } else {
      publishBtn.classList.remove("unpublish");
      publishBtn.innerText = "Publish";
    }

    if (item.isAuctioning) {
      aucBtn.textContent = "On Auction";
    } else {
      aucBtn.textContent = "Send To Auction";
    } // Send to Auction


    aucBtn.addEventListener("click", function () {
      var timer = +localStorage.getItem("seconds");

      if (timer === 0) {
        aucItem.style.display = "block";
        noAucAtm.style.display = "none";
        resetAuctioning();
        var activeAuctionBtn = storagedItems.findIndex(function (el) {
          return el.id === item.id;
        });
        storagedItems[activeAuctionBtn].isAuctioning = true;

        if (storagedItems[activeAuctionBtn].isAuctioning) {
          aucBtn.textContent = "On Auction";
        } else {
          aucBtn.textContent = "Send To Auction";
        }

        startTimer();
        updateLocalStorage(storagedItems);
      } else {
        alert("There is active auction please wait before auctioning another item.");
      }
    });

    function resetAuctioning() {
      storagedItems.forEach(function (el) {
        return el.isAuctioning = false;
      });
      updateLocalStorage(storagedItems);
    } // Un/Publish Item


    publishBtn.addEventListener("click", publishFunct);

    function publishFunct() {
      if (publishBtn.innerText === "Unpublish") {
        publishBtn.textContent = "Publish";
        item.isPublished = false;
        publishedOrNot.checked = false;
        publishBtn.classList.remove("unpublish");
      } else if (publishBtn.innerText === "Publish") {
        publishBtn.textContent = "Unpublish";
        item.isPublished = true;
        publishedOrNot.checked = true;
        publishBtn.classList.add("unpublish");
      }

      updateLocalStorage(storagedItems);
    } // Remove Item


    removeBtn.addEventListener("click", function () {
      var removeQuestion = confirm("Are you sure you want to delete this item");

      if (removeQuestion) {
        card.remove();
        var removeCardIndex = storagedItems.findIndex(function (el) {
          return el.id == item.id;
        });
        storagedItems.splice(removeCardIndex, 1);
        updateLocalStorage(storagedItems);
      }
    }); // Edit Item

    editBtn.addEventListener("click", function () {
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
      index = storagedItems.findIndex(function (el) {
        return el.id == item.id;
      });
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
  } // Add or Edit item


  newItemBtn.addEventListener("click", function () {
    if (editMode) {
      storagedItems[index].title = titleInp.value;
      storagedItems[index].description = description.value;
      storagedItems[index].type = typeOfArt.value;
      storagedItems[index].price = priceArtLabel.value;
      storagedItems[index].image = imgUrl.value === "" ? screenshotImage.src : imgUrl.value;
      storagedItems[index].isPublished = publishedOrNot.checked;
      artistItemWrapper.style.display = "block";
      addNewItemPage.style.display = "none";
      var updatedList = activeArtistItemsFilter();
      populateFunction(updatedList);
      updateLocalStorage(storagedItems);
    } else {
      indexCounter++;
      var date = new Date();
      var newItem = {
        id: +"".concat(indexCounter),
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
        priceSold: 2030
      };
      storagedItems.push(newItem);
      updateLocalStorage(storagedItems);

      var _updatedList = activeArtistItemsFilter();

      populateFunction(_updatedList);
      console.log(storagedItems);
      artistItemWrapper.style.display = "block";
      addNewItemPage.style.display = "none";
      resetValues();
    }
  });
} // Toggle Add New Item


addNewItem.addEventListener("click", function () {
  resetValues();
  editMode = false;
  artistItemWrapper.style.display = "none";
  addNewItemPage.style.display = "block";
  editHeader.textContent = "Add new Item";
  newItemBtn.textContent = "Add New Item";
}); // Closes the AddNewItem Window

cancelBtn.addEventListener("click", function () {
  artistItemWrapper.style.display = "block";
  addNewItemPage.style.display = "none";
}); // Camera

openCamera.addEventListener("click", function () {
  getImage.style.display = "block";
  addNewItemPage.style.display = "none";
}); // feather.replace();

var streamStarted = false;

var _buttons = _slicedToArray(buttons, 3),
    play = _buttons[0],
    pause = _buttons[1],
    screenshot = _buttons[2];

var constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440
    }
  }
};

cameraOptions.onchange = function () {
  var updatedConstraints = _objectSpread({}, constraints, {
    deviceId: {
      exact: cameraOptions.value
    }
  });

  startStream(updatedConstraints);
};

play.onclick = function () {
  if (streamStarted) {
    video.play();
    play.classList.add("d-none");
    pause.classList.remove("d-none");
    return;
  }

  if ("mediaDevices" in navigator && navigator.mediaDevices.getUserMedia) {
    var updatedConstraints = _objectSpread({}, constraints, {
      deviceId: {
        exact: cameraOptions.value
      }
    });

    startStream(updatedConstraints);
  }
};

var pauseStream = function pauseStream() {
  video.pause();
  play.classList.remove("d-none");
  pause.classList.add("d-none");
};

var doScreenshot = function doScreenshot() {
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

var startStream = function startStream(constraints) {
  var stream;
  return regeneratorRuntime.async(function startStream$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(navigator.mediaDevices.getUserMedia(constraints));

        case 2:
          stream = _context.sent;
          handleStream(stream);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

function stopStream() {
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
}

var handleStream = function handleStream(stream) {
  video.srcObject = stream;
  play.classList.add("d-none");
  pause.classList.remove("d-none");
  screenshot.classList.remove("d-none");
};

var getCameraSelection = function getCameraSelection() {
  var devices, videoDevices, options;
  return regeneratorRuntime.async(function getCameraSelection$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(navigator.mediaDevices.enumerateDevices());

        case 2:
          devices = _context2.sent;
          videoDevices = devices.filter(function (device) {
            return device.kind === "videoinput";
          });
          options = videoDevices.map(function (videoDevice) {
            return "<option value=\"".concat(videoDevice.deviceId, "\">").concat(videoDevice.label, "</option>");
          });
          cameraOptions.innerHTML = options.join("");

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

getCameraSelection();

function resetValues() {
  publishedOrNot.value = "";
  title.value = "";
  description.value = "";
  typeOfArt.value = "";
  priceArtLabel.value = "";
  imgUrl.value = "";
} // Closes the Camera


function closeCamera() {
  var video = document.querySelector("video");
  var mediaStream = video.srcObject;
  var tracks = mediaStream.getTracks();
  tracks[0].stop();
  tracks.forEach(function (track) {
    return track.stop();
  });
}