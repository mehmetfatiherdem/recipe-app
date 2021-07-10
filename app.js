const dataByName = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const randomData = "https://www.themealdb.com/api/json/v1/1/random.php"

const recipe = document.getElementById("find-recipe")

const search = document.getElementById("search")

const recipeSection = document.getElementById("recipe-section-cta")


search.addEventListener("click", (e) => {
    e.preventDefault()
    getRecipe(recipe.value.trim(), dataByName)

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

function getFirstRecipe(){
    removeElement(recipeSection)
    for(let j = 0; j<4; j++){
        const row = document.createElement("div")
        row.classList.add("row")
        recipeSection.appendChild(row)

        for(let i = 0; i<2; i++){
            fetch(randomData)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    data.meals.forEach(meal => {

                        const column = document.createElement("div")
                        row.appendChild(column)
                        column.classList.add("column")

                        createImageElement(column, meal)
                        createRecipeName(column, meal)
                        
                        
                    })
        
                }
            })
        }
    }
    
    

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

    removeElement(recipeSection)

    fetch(dataByName + food)
    .then(response => response.json())
    .then(data => {


        if (data.meals) {

            
                const row = document.createElement("div")
                row.classList.add("row")
                recipeSection.appendChild(row)
        
             
                   
                        const column = document.createElement("div")
                                row.appendChild(column)
                                column.classList.add("column")
        
                                createImageElement(column, data.meals[0])
                                createRecipeName(column, data.meals[0])


        }else{

      alert("No recipe found")

        }
    })
}


getFirstRecipe()





