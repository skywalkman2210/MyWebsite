function q1(count) {
	if (document.getElementById("q1-a").checked)
	{
		yesOrNo = true;
		count++;
	}
	else if (document.getElementById("q1-b").checked)
	{
		yesOrNo = false;
	}
	else if (document.getElementById("q1-c").checked)
	{
		yesOrNo = false;
	}
	else if (document.getElementById("q1-d").checked)
	{
		yesOrNo = false;
	}
	return [yesOrNo, count];
}

function q2(count) {
	var yesOrNo = "";
	if (document.getElementById("q2-b").checked)
	{
		yesOrNo = true;
		count++;
	}
	else if (document.getElementById("q2-a").checked)
	{
		yesOrNo = false;
	}
	else if (document.getElementById("q2-c").checked)
	{
		yesOrNo = false;
	}
	else if (document.getElementById("q2-d").checked)
	{
		yesOrNo = false;
	}
	return [yesOrNo, count];
}

function q3(count) {
	var yesOrNo = "";
	if (document.getElementById("q3-a").checked)
	{
		yesOrNo = true;
		count++;
	}
	else if (document.getElementById("q3-d").checked)
	{
		yesOrNo = false;
	}
	else if (document.getElementById("q3-c").checked)
	{
		yesOrNo = false;
	}
	else if (document.getElementById("q3-b").checked)
	{
		yesOrNo = false;
	}
	return [yesOrNo, count];
}

function selected(){
	var count = 0;
	var q1a = "";
	var q2a = "";
	var q3a = "";
	var q1a2 = "";
	var q2a2 = "";
	var q3a2 = "";
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	q1a = q1(count);
	q2a = q2(count);
	q3a = q3(count);
	q1a2 = q1a[0];
	q2a2 = q2a[0];
	q3a2 = q3a[0];
	count1 = + q1a[1].toString();
	count2 = + q2a[1].toString();
	count3 = + q3a[1].toString();
	count = Number(count1) + Number(count2) + Number(count3);
	
	if( (q1a2 == true)&&
		(q2a2 == true) &&
		(q3a2 == true) )
	{
		document.getElementById("answer").innerHTML = "You got 3/3 right! Good Job!";
		document.cookie="numRight="+Number(count)+"; expires=Fri, 18 Dec 2015 12:00:00 UTC path=/php/";
	}
	else if( (q1a2 == true)||
		(q2a2 == true) ||
		(q3a2 == true) )
	{
		document.getElementById("answer").innerHTML = "You got "+ Number(count) +"/3 right!";
		document.cookie="numRight="+Number(count)+"; expires=Fri, 18 Dec 2015 12:00:00 UTC path=/php/";
	}
	else
	{
		document.getElementById("answer").innerHTML = "You got them all wrong!"
		document.cookie="numRight="+Number(count)+"; expires=Fri, 18 Dec 2015 12:00:00 UTC path=/php/";
	}
	window.open("quizRight.php");
}