const btn = document.querySelector("#btn");
const input_box = document.querySelector("#input_box");
const input_txt = document.querySelector("#input_txt");
const txt = document.querySelector("#txt");
const num = document.querySelector("#num");
let chancesTxt = document.querySelector("#chancesTxt");
let randomNumber = Math.floor(Math.random() * 10) + 1;

let number;
let Chances = 3;
chancesTxt.innerHTML = "Chances:- " + Chances;
console.log(randomNumber);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(num.value);
  Chances--;
  chancesTxt.innerHTML = "Chances:- " + Chances;
  if (Chances == 0) {
    activateBox("Loss");
  }
  number = num.value;
  checkNum(number);
  num.value = "";
});

function checkNum(number) {
  if (number == randomNumber) {
    activateBox("Win");
  } else if (number > randomNumber) {
    txt.innerHTML = "Enter Small Number";
  } else {
    txt.innerHTML = "Enter Large Number";
  }
}

function activateBox(e) {
  input_box.classList.add("active");
  input_txt.innerHTML = "You " + e + " The Game";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
function play(e) {
  input_box.classList.remove("active");
  Chances = 3;
  txt.innerHTML = "";
  chancesTxt.innerHTML = "Chances:- " + Chances;
}
