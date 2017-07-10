$(document).ready( function(){
	$('#back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderActivities(activities);
	renderHighlightedRecipes(recipesArray);
});

	$(document).ready(function printNews(){
		$('#noticias').append("NUEVAS RECETAS");
	});

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(elemento){
		if (elemento.highlighted == true) {
			renderRecipe(elemento);
			console.log(elemento);
		}
	});
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+ recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe">'+ recipe.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+ recipe.name + '.jpg"></a>');
}
/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	console.log('Activities: ', activities);
	activities.forEach(function(el){
		console.log(el);
		renderActivity(el);
	});
	if (activities.length > 0) {
		$('#wrap').remove();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


