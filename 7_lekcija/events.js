const button = document.querySelector("button[type = `submit`]");

const counerElement = document.querySelector(".counter");

let counter = 15;

counerElement.textContent = counter;

button.addEventListener("click", () => {
  counter += 1;
  console.log(`click counter: ${counter}`);
  counerElement.textContent = counter;
});
