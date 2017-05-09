var modal;
var pages = ["wrapperHome", "wrapperMenu"];
var foodItems = ["empty","burgers","fingerFoods","poutines","desserts","beers","wines", "cocktails", "nonAlc"]
var categories = ["drinkSubCats","foodSubCats"];
var catArrows = ["drinkArrow", "foodArrow"];
var subArrows = ["burgerArrow", "fingerArrow", "poutineArrow","dessertArrow", "beerArrow", "wineArrow", "cocktailArrow", "nonArrow"];

function pageShow(next){
	for(var i=0; i<pages.length; i++){
		if(document.getElementById(pages[i]) != null){
			(document.getElementById(pages[i])).style.display='none';
		}
	}
	(document.getElementById(pages[next])).style.display='block';
}

/*function cancelOrder(){
	pageShow(0);
}*/

function hideShow(current, arrow){
	for(var i=0; i<foodItems.length; i++){
		if(document.getElementById(foodItems[i]) != null){
			(document.getElementById(foodItems[i])).style.display='none';
		}
	}
	if(document.getElementById(current)!=null){
		(document.getElementById(current)).style.display='block';
	}

	for(var i=0; i<subArrows.length; i++){
		if(document.getElementById(subArrows[i])!=null){
			(document.getElementById(subArrows[i])).style.display='none';
		}
	}

	(document.getElementById(arrow)).style.display='block';
}

function catSelect(category,arrow){
	for(var i=0; i<foodItems.length; i++){
		if(document.getElementById(foodItems[i]) != null){
			(document.getElementById(foodItems[i])).style.display='none';
		}
	}

	for(var i=0; i<categories.length; i++){
		if(document.getElementById(categories[i])!=null){
			(document.getElementById(categories[i])).style.display='none';
		}
	}

	for(var i=0; i<catArrows.length; i++){
		if(document.getElementById(catArrows[i])!=null){
			(document.getElementById(catArrows[i])).style.display='none';
		}
	}

	for(var i=0; i<subArrows.length; i++){
		if(document.getElementById(subArrows[i])!=null){
			(document.getElementById(subArrows[i])).style.display='none';
		}
	}

	(document.getElementById(arrow)).style.display='block';

	(document.getElementById('empty')).style.display='block';

	(document.getElementById(category)).style.display='block';
	
}

function myFunction() {
    this.popup.popuptext.toggle('show');
}

// When the user clicks the button, open the modal
function view_order() {
	modal = document.getElementById('myModal');
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function close_order() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}