// https://www.themealdb.com/api.php


const api = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const recipe = document.getElementById("find-recipe")

const search = document.getElementById("search")

const recipeSection = document.getElementById("recipe-section-cta")

search.addEventListener("click", (e) => {
    e.preventDefault()
    getRecipe(recipe.value)

})

function createRecipeName(parent, child){
    const recipeName = document.createElement("h1")

    recipeName.innerText = child.strMeal

    recipeName.classList.add("top-intro-section")

    parent.appendChild(recipeName)
}

function createImageElement(parent, child){
    const recipeImage = document.createElement("img")

    recipeImage.src = child.strMealThumb

    recipeImage.classList.add("recipe-img")

    parent.appendChild(recipeImage)
}

function getAllRecipe(){


}

function removeElement(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function resetState(){
    removeElement(recipeSection)

}


function getRecipe(food) {
    fetch(api + food)
    .then(response => response.json())
    .then(data => {
        if (data.meals) {
            data.meals.forEach(meal => {
                console.log(meal.strMeal)
            })

        }else{

      console.log("No recipe found")

        }
    })
}








