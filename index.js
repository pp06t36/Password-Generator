let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");

const charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generatePassword() {
  // Retrieve the selected password length from the range selector
  const passwordLength = parseInt(document.getElementById("password-length-range").value);
  // Update the displayed value
  document.getElementById("password-length-value").textContent = passwordLength;

  
  passwordOneEl.value = ""; // Clear the previous password
  passwordTwoEl.value = ""; // Clear the previous password

  let passwordOne = "";
  let passwordTwo = "";

  // Shuffle the arrays
  shuffleArray(charactersUpper);
  shuffleArray(charactersLower);
  shuffleArray(numbers);
  shuffleArray(symbols);

  // Generate passwordOne
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    passwordOne += symbols[randomIndex];
  }
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * charactersUpper.length);
    passwordOne += charactersUpper[randomIndex];
  }
  for (let i = 0; i < passwordLength - 10; i++) { // Adjust the loop based on password length
    let randomIndex = Math.floor(Math.random() * charactersLower.length);
    passwordOne += charactersLower[randomIndex];
  }
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    passwordOne += numbers[randomIndex];
  }

  // Generate passwordTwo
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    passwordTwo += symbols[randomIndex];
  }
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * charactersUpper.length);
    passwordTwo += charactersUpper[randomIndex];
  }
  for (let i = 0; i < passwordLength - 10; i++) { // Adjust the loop based on password length
    let randomIndex = Math.floor(Math.random() * charactersLower.length);
    passwordTwo += charactersLower[randomIndex];
  }
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    passwordTwo += numbers[randomIndex];
  }

  passwordOneEl.value = passwordOne;
  passwordTwoEl.value = passwordTwo;
}

// Retrieve the range selector and the corresponding value element
const passwordLengthRange = document.getElementById("password-length-range");
const passwordLengthValue = document.getElementById("password-length-value");

// Add an event listener to the range selector
passwordLengthRange.addEventListener("input", function() {
  // Update the displayed value
  passwordLengthValue.textContent = passwordLengthRange.value;
});

function copyPassword(elementId) {
  const passwordElement = document.getElementById(elementId);
  const password = passwordElement.textContent;

  if (password) {
    navigator.clipboard.writeText(password)
      .then(() => {
        console.log("Password copied to clipboard:", password);
        // Optionally, you can display a success message or perform other actions
      })
      .catch((error) => {
        console.error("Failed to copy password:", error);
        // Optionally, you can display an error message or handle the error
      });
  }
}

passwordOneEl.addEventListener("click", function() {
  copyPassword("password-one-el");
});

passwordTwoEl.addEventListener("click", function() {
  copyPassword("password-two-el");
});
