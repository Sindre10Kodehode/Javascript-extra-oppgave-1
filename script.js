let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let colorInput = document.getElementById("colorInput");

let result = document.getElementById("nameOutput");


//console.log(heckle);

function printOutput() {

let heckle;

let age = parseInt(ageInput.value);

if (age <= 25) {
   heckle = "That's not THAT long though, is it?";
} else if (age > 25 && age <= 30) {
   heckle = "Do you really think you've found yourself yet?";
} else if (age > 30 && age <= 40) {
   heckle = "Is it what you expected?";
} else if (age > 40 && age <= 50) {
   heckle = "How's your back feeling buddy?";
}
  console.log(heckle);

  let birthYear = 2023 - age;
  console.log(birthYear);
  console.log(colorInput.value);
  console.log(age);

  result.textContent = `Hello ${nameInput.value}, congratulations for surviving
    ${age.value} years! You've been alive since ${birthYear}!
    Isn't that something? ${heckle}`;
  result.style.color = colorInput.value;
}
