var menu=[];

function menuItem (name, price) {
	this.name=name;
	this.price=price;
	this.quantity=0;
}

function createMenu () {
	menu=[];
	
	//Food
	menu.push (new menuItem ("buffaloChickenNachos", 7));
	menu.push (new menuItem ("chickenStrips", 8));
	menu.push (new menuItem ("chiptoleHoneyChicken", 9));
	menu.push (new menuItem ("tacoCups", 6));

	menu.push (new menuItem ("baconOnionBurger", 7));
	menu.push (new menuItem ("chickenBurger", 8));
	menu.push (new menuItem ("cheeseburger", 9));

	menu.push (new menuItem ("butterChickenPoutine", 8));
	menu.push (new menuItem ("loadedPoutine", 7));
	menu.push (new menuItem ("regularPoutine", 5));

	menu.push (new menuItem ("brownieExplosion", 8));
	menu.push (new menuItem ("cherryCheesecake", 7));
	menu.push (new menuItem ("chocolateTorte", 9));
	menu.push (new menuItem ("panCookie", 6));

	//Drinks
	menu.push (new menuItem ("corona", 8));
	menu.push (new menuItem ("guiness", 7));
	menu.push (new menuItem ("budweiser", 6));
	menu.push (new menuItem ("sapporo", 6));

	menu.push (new menuItem ("sauvignon", 7));
	menu.push (new menuItem ("pinotGrigio", 9));
	menu.push (new menuItem ("pinotNoir", 9));

	menu.push (new menuItem ("martini", 8));
	menu.push (new menuItem ("whiskey", 7));
	menu.push (new menuItem ("mojito", 9));
	menu.push (new menuItem ("vodka", 6));

	menu.push (new menuItem ("coke", 2));
	menu.push (new menuItem ("gingerAle", 2));
	menu.push (new menuItem ("orangeJuice", 4));

	menu.push (new menuItem ("cappuccino", 4));
	menu.push (new menuItem ("hotChocolate", 3));
	menu.push (new menuItem ("tea", 3));

	//Two specials
	menu.push (new menuItem ("beerBurgerSpecial", 11));
	menu.push (new menuItem ("burgerFriesSpecial", 9));
}

function getCost () {
	var cost=0;
	for (var i=0; i<menu.length; i++)
	{
		cost = cost + (menu[i].price * menu[i].quantity);
	}
	var costInfo="Total: $"+cost;
	if (document.getElementById("cost")!=null)
	{
		document.getElementById("cost").innerHTML = costInfo;
	}
	if (document.getElementById("cost2")!=null)
	{
		document.getElementById("cost2").innerHTML = costInfo;
	}
	if (document.getElementById("cost3")!=null)
	{
		document.getElementById("cost3").innerHTML = costInfo;
	}
	if (document.getElementById("cost4")!=null)
	{
		document.getElementById("cost4").innerHTML = costInfo;
	}
	if (document.getElementById("cost5")!=null)
	{
		document.getElementById("cost5").innerHTML = costInfo;
	}
	if (document.getElementById("cost6")!=null)
	{
		document.getElementById("cost6").innerHTML = costInfo;
	}
}
function displayOrder() {
	getCost();

	var edit = document.getElementsByClassName("edit")
	edit[0].style.display="none";
	var view = document.getElementsByClassName("vieworder")
	view[0].style.display="block";
	
	for (var i=0; i<menu.length; i++)
	{
		if (menu[i].quantity!=0)
		{
			document.getElementById(menu[i].name).style.display="block";
			var temp = menu[i].name+"Quantity";
			document.getElementById (temp).innerHTML = menu[i].quantity;
			temp = menu[i].name+"Price";
			document.getElementById (temp).innerHTML = "$"+menu[i].price;
		}
		else
		{
			document.getElementById(menu[i].name).style.display="none";
		}
	}
}

function deleteFromOrder (name, displayName) {
	var del = confirm ("Are you sure you want to delete " + displayName + " from the order?")
	if (del==true)
	{
		for (var i=0; i<menu.length; i++)
		{
			if (menu[i].name == name)
			{
				menu[i].quantity = 0;
				if (name=="cheeseburger" || name=="beerBurgerSpecial")
				{
					resetCustom("cheeseburger");
				}
				break;
			}
		}
		displayOrder();
	}
}
function increaseQuantity (name) {
	for (var i=0; i<menu.length; i++)
	{
		if (menu[i].name == name)
		{
			menu[i].quantity++;
			break;
		}
	}
	displayOrder();
}
function decreaseQuantity (name, displayName) {
	for (var i=0; i<menu.length; i++)
	{
		if (menu[i].name == name)
		{
			if (menu[i].quantity>1)
			{
				menu[i].quantity--;
			}
			else if (menu[i].quantity==1)
			{
				deleteFromOrder(name, displayName);
			}
			break;
		}
	}
	displayOrder();
}

function cancelOrder() {
	for (var i=0; i<menu.length; i++)
	{
		menu[i].quantity = 0;
	}
	displayOrder();
}

function beerBurgerSpecial() {
	//Cheeseburger+Budweiser
	increaseQuantity ("beerBurgerSpecial");
}
function pinotSpecial() {
	increaseQuantity ("pinotGrigio");
	for (var i=0; i<menu.length; i++)
	{
		if (menu[i].name=="pinotGrigio")
		{
			menu[i].price = 5;
			break;
		}
	}
}
function burgerFriesSpecial() {
	//Bacon crispy onion burger+Fries
	increaseQuantity ("burgerFriesSpecial");
}
function mojitoSpecial() {
	increaseQuantity("mojito");
	for (var i=0; i<menu.length; i++)
	{
		if (menu[i].name=="mojito")
		{
			menu[i].price = 6;
			break;
		}
	}
}

function editItem(name) {
	var edit = document.getElementsByClassName("edit");
	edit[0].style.display="block";
	var view = document.getElementsByClassName("vieworder");
	view[0].style.display="none";
}
function backToOrder() {
	var edit = document.getElementsByClassName("edit")
	edit[0].style.display="none";
	var view = document.getElementsByClassName("vieworder")
	view[0].style.display="block";
	displayOrder();
}

function emptyOrder() {
	var empty=true;
	for (var i=0; i<menu.length; i++)
	{
		if (menu[i].quantity>0)
		{
			empty=false;
			break;
		}
	}
	return empty;
}
function resetCustom(name) {
	var checkboxes = document.getElementsByTagName ('input');
	for (var i=0; i<checkboxes.length; i++)
	{
		checkboxes[i].checked = true;
	}
}
function checkout() {
	var empty = emptyOrder();
	if (empty==true)
	{
		alert ("You have no items in your order. Please go back and add some items.")
		pageShow(1);
	}
	else
	{
		var done = confirm ("Are you sure you want to submit your order?");
		if (done==true)
		{
			resetCustom("cheeseburger");
			cancelOrder();
			displayOrder();
			pageShow(0);
		}
		else
		{
			view_order();
			displayOrder();
		}
	}
}