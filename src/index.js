const red = document.querySelector(".red");

const green = document.querySelector(".green");

const blue = document.querySelector(".blue");

const text = document.querySelector(".text");

const result = document.querySelector(".result");

text.addEventListener("input", () => {
  displayText(text.value);
});

function displayText(text) {
  result.innerHTML = text;
}

red.addEventListener("click", () => {
  result.style.color = "red";
});
green.addEventListener("click", () => {
  result.style.color = "green";
});
blue.addEventListener("click", () => {
  result.style.color = "blue";
});

//https://biygup.csb.app/
