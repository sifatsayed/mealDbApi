const searchFoods = () =>{
    const searchText = document.getElementById('search-field').value 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data =>displayFood(data.meals))
}

const displayFood = foods =>{
    
    const searchSection = document.getElementById('search-section');
    foods.forEach(food => {
        console.log(food)
        const foodDiv = document.createElement('div');
        foodDiv.className = "food";
        foodDiv.innerHTML = `
        
            <img src="${food.strMealThumb}">
            <h2>${food.strMeal}</h2>
            <button onclick="foodDetail('')">Click Here</button>
            `
        searchSection.appendChild(foodDiv)
    });

}

const foodDetail = detail =>{
   const url = `https://www.themealdb.com/api/json/v1/1/random.php${detail}`;
   fetch(url)
   .then(res => res.json())
   .then(data => renderFoodInfo(data.meals[0]))
}

const renderFoodInfo = foodInfo =>{
    const displayFoodDetails = document.getElementById('displayFoodDetails');
    displayFoodDetails.innerHTML = `
    <img src ="${foodInfo.strMealThumb}">
    <h1>${foodInfo.strMeal}</h1>
    <h5>${foodInfo.strIngredient1}</h5>
    <h5>${foodInfo.strIngredient2}</h5>
    <h5>${foodInfo.strIngredient3}</h5>
    <h5>${foodInfo.strIngredient4}</h5>
    <h5>${foodInfo.strIngredient5}</h5>
    <h5>${foodInfo.strIngredient6}</h5>
    
    `
}