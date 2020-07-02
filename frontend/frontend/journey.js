const form = document.getElementById("form");
const startcity = document.getElementById("startcity");
const endcity = document.getElementById("endcity");
const amt = document.getElementById("amt");
var petrol = document.getElementById("petrol");
var food = document.getElementById("food");
var miscellaneous = document.getElementById("miscellaneous");

form.addEventListener("submit", e => {
  e.preventDefault();

  //checkInputs();
});

// function checkInputs() {
//   if (startcity.value === "") {
//     setErrorFor(startcity, "start city cannot be blank");
//   } else {
//     setSuccessFor(startcity);
//   }

//   if (endcity.value === "") {
//     setErrorFor(endcity, "end city cannot be blank");
//   } else {
//     setSuccessFor(endcity);
//   }

//   if (petrol.value === "") {
//     setErrorFor(petrol, "this field cannot be blank");
//   } else {
//     setSuccessFor(petrol);
//   }
//   if (food.value === "") {
//     setErrorFor(food, "this field cannot be blank");
//   } else {
//     setSuccessFor(food);
//   }
//   if (miscellaneous.value === "") {
//     setErrorFor(miscellaneous, "this field cannot be blank");
//   } else {
//     setSuccessFor(miscellaneous);
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = message;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }
