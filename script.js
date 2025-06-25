"use strict";
const pageBody = document.querySelector("body");
const fName = document.getElementById("form-nom");
const lName = document.getElementById("form-prènom");
const email = document.getElementById("form-email");
const phone = document.getElementById("form-télephone");
const formBtn = document.querySelector("#submit-btn");
const masculinRadioBtn = document.querySelector("#form-genre-masculin");
const fémininRadioBtn = document.querySelector("#form-genre-féminin");
const checkboxInputs = document.querySelectorAll(
  `.form-div div input[type="checkbox"]`
);
const formDivs = document.querySelectorAll(".form-div");
const groupeOptions = document.querySelectorAll("#form-groups option");
const makeLower = function (ele) {
  return ele.value.toLowerCase();
};
const fNameRegex = /^(^[a-z{2-}]+[\'\-\s]?[a-z]+)$/gi;
const lNameRegex = /^(^[a-z{2-}]+[\'\-\s]?[a-z]+)$/gi;
const phoneRegex = /^(05|06|07)\d{8}$/g;
const emailRegex = new RegExp(
  /^((\w+)\.(\w+)\.(\w+)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma))$/,
  "gi"
);
// `^(${makeLower(fName)}\.${makeLower(lName)}\.solicode@(gmail|outlook|hotmail|yahoo)\.(com|ma|fr))$`
const validate = (input, regex) => regex.test(input.value.toLowerCase());
const countCheckbox = (checkboxs) => {
  let count = 0;
  checkboxs.forEach((checkbox) => {
    checkbox.checked ? count++ : count;
  });
  return count;
};
const printError = (input, message) => {
  const formDiv = input.closest(".form-div");
  const small = formDiv.querySelector("small");
  formDiv.className = "form-div error";
  small.innerText = message;
};

const printSuccess = (input) => {
  const formDiv = input.closest(".form-div");
  formDiv.className = "form-div success";
};
const checkName = (name) => {
  if (name.value.trim() === "") {
    printError(name, "Name cannot be blank");
  } else if (validate(name, fNameRegex)) printSuccess(name);
  else if (!validate(name, fNameRegex))
    printError(name, "Please enter a valid name");
};
const checkLastName = (lName) => {
  if (lName.value.trim() === "") {
    printError(lName, "Last Name cannot be blank");
  } else if (validate(lName, lNameRegex)) printSuccess(lName);
  else if (!validate(lName, lNameRegex))
    printError(lName, "Please enter a valid last name");
};
const checkEmail = (email) => {
  if (email.value.trim() == "") {
    printError(email, "Email cannot be blank");
  } else if (validate(email, emailRegex)) printSuccess(email);
  else if (!validate(email, emailRegex))
    printError(email, "Please enter a valid email");
};
const checkPhone = (phone) => {
  if (phone.value.trim() === "") {
    printError(phone, "Phone cannot be blank");
  } else if (validate(phone, phoneRegex)) printSuccess(phone);
  else
    printError(phone, "Please enter a valid phone number");
};
const checkGroup = () => {
  let selectedGroup = document.querySelector("#form-groups").value;
  if (selectedGroup == "") return false;
  else return true;
};
const checkInputs = () => {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  if (fNameValue === "") {
    printError(fName, "Name cannot be blank");
  } else if (validate(fName, fNameRegex)) printSuccess(fName);
  else if (!validate(fName, fNameRegex))
    printError(fName, "Please enter a valid name");
  if (lNameValue === "") {
    printError(lName, "Last Name cannot be blank");
  } else if (validate(lName, lNameRegex)) printSuccess(lName);
  else if (!validate(lName, lNameRegex))
    printError(lName, "Please enter a valid name");
  if (emailValue == "") {
    printError(email, "Email cannot be blank");
  } else if (validate(email, emailRegex)) printSuccess(email);
  else if (!validate(email, emailRegex))
    printError(email, "Please enter a valid email");
  if (phoneValue === "") printError(phone, "Phone cannot be blank");
  else if (validate(phone, phoneRegex)) printSuccess(phone);
  else printError(phone, "Please enter a valid phone number");
  if (masculinRadioBtn.checked || fémininRadioBtn.checked)
    printSuccess(fémininRadioBtn);
  else printError(fémininRadioBtn, "Please choose one at least");
  if (countCheckbox(checkboxInputs) > 3)
    printError(document.querySelector("#Théatre"), "Please enter just 3 clubs");
  else if (countCheckbox(checkboxInputs) == 0)
    printError(
      document.querySelector("#Théatre"),
      "Please select at least one club"
    );
  else printSuccess(document.querySelector("#Théatre"));
  if (checkGroup()) printSuccess(document.querySelector("#form-groups"));
  else
    printError(document.querySelector("#form-groups"), "Please select a group");
};
const redirection = (divs) => {
  let arr = Array.from(divs);
  return arr.every((div) => div.classList.contains("success"));
};
fName.addEventListener("blur", (e) => {
  checkName(fName);
});
lName.addEventListener("blur", (e) => {
  checkLastName(lName);
});
email.addEventListener("blur", (e) => {
  checkEmail(email);
});
phone.addEventListener("blur", (e) => {
  checkPhone(phone);
});

formBtn.addEventListener("click", (e) => {
  checkInputs();
  if (!redirection(formDivs)) e.preventDefault();
  if (redirection(formDivs)) pageBody.classList.toggle("fade");
});
