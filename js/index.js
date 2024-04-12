console.clear();

const form = document.querySelector("[data-js='form']");

// console.log("form", form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted the form");

  // console.log("event.target: ", event.target);
  // const formElements = event.target.elements;

  // console.log("formElements: ", formElements);
  // console.log("formElements.firstName: ", formElements.firstName);
  // console.log("formElements.firstName.value: ", formElements.firstName.value);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);

  // possible to reset a form

  event.target.reset();
});

const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

console.log("charactersLeftElement", charactersLeftElement);

messageInput.addEventListener("input", (event) => {
  console.log("input?", 150 - event.target.value.length);
  charactersLeftElement.textContent = 150 - event.target.value.length;
});

console.log("messageInput", messageInput);

// whenever user types into textarea we need to know aboutit
// when event happens we need to figure out value, and length
// 150 - length
// update the text indicating characters left
