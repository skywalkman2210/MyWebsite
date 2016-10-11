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













function processAns(testNum)
{
	var a = "-a";
	var b = "-b";
	var c = "-c";
	var d = "-d";
	var rA = testNum + a;
	var rB = testNum + b;
	var rC = testNum + c;
	var rD = testNum + d;
	var right = false;
	var rO = "";
	
	if (document.getElementById(rA).value = 'true')
	{
		right = true;
		rO = rA;
	}
	
	else if (document.getElementById(rB).value = 'true')
	{
		right = true;
		rO = rB;
	}
	
	else if (document.getElementById(rC).value = 'true')
	{
		right = true;
		rO = rC;
	}
	
	else if (document.getElementById(rD).value = 'true')
	{
		right = true;
		rO = rD;
	}
	
	else
	{
		document.writeln("ERROR THIS SHOULD NEVER PRINT!");
	}
	
	return [right, rO];
}

function validateAnswers() {
	var ans = "";
	var t1 = "t1";
	var t2 = "t2";
	var t3 = "t3";
	var t4 = "t4";
	var t5 = "t5";
	var t1a = "";
	var t2a = "";
	var t3a = "";
	var t4a = "";
	var t5a = "";
	
	t1a = processAns(t1);
	t2a = processAns(t2);
	t3a = processAns(t3);
//	t4a = processAns(t4);
//	t5a = processAns(t5);
	
	document.writeln(t1a[0]+" "+t1a[1])
	document.writeln(t2a[0]+" "+t2a[1])
	document.writeln(t3a[0]+" "+t3a[1])
//	document.writeln(t4a[0]+" "+t4a[1])
//	document.writeln(t5a[0]+" "+t5a[1])
}