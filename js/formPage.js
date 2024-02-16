let form = document.getElementById("form");
let userName = document.getElementById("name");
let company = document.getElementById("company");
let email = document.getElementById("email");
let number = document.getElementById("number");
let select = document.getElementById("select");
let smaillText = document.querySelector("small");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

// First and Last-Name
let setError = (element, message) => {
  let inputControl = element.parentElement;
  let errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

let setSuccess = (element) => {
  let inputControl = element.parentElement;
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

// Proper email validation
let isValidEmail = (email) => {
  let validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
  return validEmail.test(String(email).toLowerCase());
};
let validateInputs = () => {
  let userNameValue = userName.value.trim();
  let companyValue = company.value.trim();
  let emailValue = email.value.trim();
  let numberValue = number.value.trim();
  let selectValue = select.value.trim();
  // name
  if (userNameValue === "") {
    setError(userName, "Внесете Име и Презиме!");
  } else {
    setSuccess(userName);
  }
  // company
  if (companyValue === "") {
    setError(company, "Внесете име на компанија!");
  } else {
    setSuccess(company);
  }
  // email
  if (emailValue === "") {
    setError(email, "Внесете Емаил адреса!");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Внесете валидна Емаил адреса");
  } else {
    setSuccess(email);
  }
  // number
  if (numberValue === "") {
    setError(number, "Внесете број!");
  } else {
    setSuccess(number);
  }
  select;
  if (selectValue === "") {
    setError(select, "Изберете една од опциите!");
  } else {
    setSuccess(select);
  }
};

// A function that only allows numbers to be typed in
const allowOnlyNumbers = document.getElementById("number");

allowOnlyNumbers.addEventListener("input", function (event) {
  const newValue = event.target.value.replace(/[^\d]/g, "");
  event.target.value = newValue;
});

// Select option + validation
//  let optionMenu = document.querySelector(".select-menu"),
//    selectBtn = document.querySelector(".select-btn"),
//    options = document.querySelectorAll(".option"),
//    sbtnText = document.querySelector(".sBtn-text"),
//    box = document.querySelector(".options");

//  selectBtn.addEventListener("click", () =>
//    optionMenu.classList.toggle("toggle")
//  );

//  options.forEach((option) => {
//    option.addEventListener("click", () => {
//      let selectedOption = option.querySelector(".option-text").innerText;
//      sbtnText.innerText = selectedOption;
//      console.log(selectedOption);

//      optionMenu.classList.remove("toggle");
//    });
//  });
//  // Validation
//  for (const item of options) {
//    item.addEventListener("click", function (e) {
//      e.stopPropagation();
//      selectBtn.classList.add("selected");
//      selectBtn.classList.remove("invalid");
//    });
//  }
