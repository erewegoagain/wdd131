import recipes from './recipes.mjs';


function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}



function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}">
	<figcaption>
		<ul class="recipe__tags">
			${tagsTemplate([recipe.tags])}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
	        ${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
                ${recipe.description}
		</p>
</figcaption>
</figure>`;
}



function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = ""
    for (var i = 0; i < tags.length; i++)
        html += `<li>${tags[i]}</li>`;
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
// check to see if the current index of the loop is less than our rating
    for (var r = 1; r <= 5; r++) {
        // if so then output a filled star
        if (r <= rating)
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        // else output an empty star
        else
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
		
		

		

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}





function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    let output = document.getElementById("fooddetail");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    if(recipeList.length === 1) {
    let currentRecipe = recipeTemplate(recipeList[0]);
	// Set the HTML strings as the innerHTML of our output element.
    output.innerHTML += currentRecipe;

    }
  
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

document.addEventListener("DOMContentLoaded", function () {
  init();
})



function query () {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted
}

function query(queryString) {
    // Filter recipes using the filterFunction, which checks for the query in name, description, tags, or ingredients
    const filtered = recipes.filter(recipe => filterFunction(recipe, queryString));
    // Sort by name alphabetically
    const sorted = filtered.sort(sortFunction);
    return sorted;
}

// Helper filter function
function filterFunction(recipe, query) {
    query = query.toLowerCase();
    return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(query))) ||
        (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(query)))
    );
}

// Helper sort function
function sortFunction(a, b) {
    return a.name.localeCompare(b.name);
}


function search (e) {
    	e.preventDefault();
        const input = document.getElementById("search-input").value;
            const filteredResults = query(input);
            renderRecipes(filteredResults);
  // get the search input
  // convert the value in the input to lowercase
  // use the filter function to filter our recipes
  // render the filtered list
}


document.getElementById("search").addEventListener("submit", search);