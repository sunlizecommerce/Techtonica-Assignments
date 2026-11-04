/* title */
const title = document.querySelector(".main-title");
console.log(title);

title.textContent = "Slap Yo' Bay-Beh Seafood Boil Recipe";

// Find the Chinese button
const button = document.querySelector("#chinese-btn");
// Add eventListener 
button.addEventListener("click", function() {
    console.log("Chinese button clicked!");
});
// Print the button click and change it to Chinese 