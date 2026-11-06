// Find the recipe form
const recipeForm = document.querySelector("#recipe-form");
const submittedRecipes = document.querySelector("#submitted-recipes");
// Run only if the form exists
if (recipeForm) {

    // Listen for form submission
    recipeForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();
         // Get the recipe name entered by the user
        const recipeName = document.querySelector("#recipe-name").value;
        // Saves the record (for a bit lol)
        submittedRecipes.textContent += recipeName + " | ";
        // Show a popup message
        alert("Recipe submitted successfully! 🎉");

    });
}