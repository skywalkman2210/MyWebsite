function randomMess(){
	var mess1 = "<span class='answer'>How am I supposed to know, I'm not a fucking mind reader!</span>";
	var mess2 = "<span class='answer'>I can't tell you that right now because you fucked up!</span>";
	var mess3 = "<span class='answer'>Dave loves Spanish Lesbians, is that your answer?</span>";
	var mess4 = "<span class='answer'>You want an answer? That's too bad, i'm not gonna tell you!</span>";
	var myArray = [mess1, mess2, mess3, mess4];
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	document.getElementById("ray").innerHTML = rand;
}