/* title */
const title = document.querySelector(".main-title");
console.log(title);

// title.textContent = "Slap Yo' Bay-Beh Seafood Boil Recipe yeah";
// Not sure why but this didn't work with declering title here
// Find the Chinese button
const button = document.querySelector("#chinese-btn");
// Add English button
const buttonEnglish = document.querySelector("#english-btn")
// Add eventListener 

button.addEventListener("click", function() {
   // const title = document.querySelector(".main-title");
   // I don't know why but we had to add this
    title.textContent = "一口入魂！卡津海鲜大咖";
});
// Add English eventListener
buttonEnglish.addEventListener("click", function(){
    title.textContent = "Slap Yo' Bay-Beh Seafood Boil Recipe";
});


 // Find all ingredients
    const ingredients = document.querySelectorAll(".ingredients-box li");

// Add click event to each ingredient!
    ingredients.forEach(function(ingredient) {
     ingredient.addEventListener("click", function() {
            ingredient.classList.toggle("checked");
     });
    });