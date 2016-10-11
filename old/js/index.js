var change1 = "Goodbye"; 
var change2 = "Morning"; 
var change3 = "Hello";
	
function name2()
{
	var user = document.getElementById("userName").innerHTML;
	var y = "";
	var day = new Date().getDay();
	if (user == 'Mike')
	{
		y = "Hello Mike!";
	}
	else if (user == 'Hello Mike!')
	{
		y = "Bye Mike!";
	}
	else if ((day == 3) &&
			 (user == "Bye Mike!" ) )
	{
		y = "It's Hump day!";
	}
	else if ( (day != 3) &&
			  (user == 'Bye Mike!') )
	{
		y = "Mike";
	}
	else if(user == "It's Hump day!")
	{
		y= "Mike";
	}
	document.getElementById("userName").innerHTML = y;
}

function name3() 
{
	var input = "";
	var clicker = "<a onclick='changeResult1()' class='clicker'>Change The result!</a>";
	input = document.getElementById("textb1").value;
	document.getElementById("place1").innerHTML = input;
	document.getElementById("place2").innerHTML = clicker;
}

function changeResult1()
{

	var place = document.getElementById("place1").innerHTML;
	var placer = "";
	document.getElementById("place1").innerHTML = change1;
	if (place == change1)
	{
		document.getElementById("place1").innerHTML = change2;
	}
	else if (place == change2)
	{
		document.getElementById("place1").innerHTML = change3;
	}
	else if (place == change3)
	{
		document.getElementById("place1").innerHTML = change1;
	}

}

function changeTotally(){
	var changeA = change1+"!";
	var changeB = change2+"!";
	var changeC = change3+"!";
	var place = document.getElementById("place3").innerHTML;
	document.getElementById("place3").innerHTML = changeA;
		if (place == changeA)
	{
		document.getElementById("place3").innerHTML = changeB;
	}
	else if (place == changeB)
	{
		document.getElementById("place3").innerHTML = changeC;
	}
	else if (place == changeC)
	{
		document.getElementById("place3").innerHTML = changeA;
	}
}

function changeBgColor() {
	var color1 = "darkred";
	var color2 = "blue";
	var color3 = "green";
	var color4 = "orange";
	var color5 = "black";
	var color6 = "yellow";
	var click = "";
	var change = "";
	change = "darkred";
	click = document.getElementById("body1").style.backgroundColor;
	if (click == color1)
	{
		change = color2;
	}
	else if (click == color2)
	{
		change = color3;
	}
	else if (click == color3)
	{
		change = color4;
	}
	else if (click == color4)
	{
		change = color5;
	}
	else if (click == color5)
	{
		change = color6;
	}
	else if (click == color6)
	{
		change = color1;
	}
	
	document.getElementById("body1").style.backgroundColor = change;
}

function changeFgColor() {
	var color1 = "red";
	var color2 = "blue";
	var color3 = "green";
	var color4 = "orange";
	var color5 = "black";
	var color6 = "yellow";
	var change2 = "";
	var click2 = "";
	change2 = "red";
	click2 = document.getElementById("body1").style.Color;
	if (click2 == color1)
	{
		change2 = color2;
	}
	else if (click2 == color2)
	{
		change2 = color3;
	}
	else if (click2 == color3)
	{
		change2 = color4;
	}
	else if (click2 == color4)
	{
		change2 = color5;
	}
	else if (click2 == color5)
	{
		change2 = color6;
	}
	else if (click2 == color6)
	{
		change2 = color1;
	}
	
	document.getElementById("body1").style.Color = change2;
}

function changeColors(){
	changeBgColor();
	changeFgColor();
}