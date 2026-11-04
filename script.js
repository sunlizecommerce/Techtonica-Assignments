/* title */
const title = document.querySelector(".main-title");
console.log(title);

title.textContent = "Slap Yo' Bay-Beh Seafood Boil Recipe";

// Find the Chinese button
const button = document.querySelector("#chinese-btn");
// Add English button
const button = document.querySelector("#englisg-btn")
// Add eventListener 
button.addEventListener("click", function() {
    title.textContent = "一口入魂！卡津海鲜大咖";
});
// Add English eventListener
button.addEventListener("click", function() {
    title.textContent = "Slap Yo' Bay-Beh Seafood Boil Recipe";
}

// Print the button click and change it to Chinese 