// Find the recipe form
const recipeForm = document.querySelector("#recipe-form");

//if statement run if this form exists  
if (recipeForm) {
// Listen for form submission 
 recipeForm.addEventListener("submit", function(event) {
    // No default refreshing 
    event.preventDefault();
//print "Recipe submitted"
console.log("Recipe submitted!");

    });
}