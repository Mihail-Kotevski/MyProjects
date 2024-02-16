let visitorSquare = document.querySelector("#brownCube");
let artistSquare = document.querySelector("#whiteCube");
let chooseArtist = document.querySelector("#chooseArtist");
let landingPgBtn = document.querySelectorAll(".landingPageListener");

visitorSquare.addEventListener("click", () => {
  location.hash = "visitor";
});

if (!localStorage.getItem("storagedItems")) {
  localStorage.setItem("storagedItems", JSON.stringify(items));
}

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      const artistFilterOption = document.createElement("option");
      artistFilterOption.setAttribute("value", `${e.name}`);
      artistFilterOption.innerText = `${e.name}`;

      chooseArtist.append(artistFilterOption);
    });
  });

chooseArtist.addEventListener("change", (e) => {
  localStorage.setItem("activeUser", chooseArtist.value);
  location.hash = "artistHomePage";
});

landingPgBtn.forEach((el) =>
  el.addEventListener("click", () => {
    location.hash = "#";
    localStorage.removeItem("activeUser");
    chooseArtist.selectedIndex = 0;
  })
);