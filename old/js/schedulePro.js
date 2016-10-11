var monday = "<p>.NET Framework RM 115 @ 8:00 - 8:50</p>";
	monday +="<p>.NET Framework RM 115 @ 9:00 - 9:50</p>";
	monday +="<p>&nbsp;</p>";
	monday +="<p>*Business Apps RM 115 @ 11:00 - 12:15</p>";
	monday +="<p>*Common Hour @ 12:15 - 1:00PM</p>";
    monday +="<p>Business Apps RM 115 @ 1:00 - 1:50</p>"
	monday +="<p>Java RM 115 @ 2:00 - 2:50</p>";
	monday +="<p>Java RM 115 @ 3:00 - 3:50</p>";
//	monday +="<p>Helbig Room 205 @ 3:00 - 3:50</p>";

var tuesday = "<p>8:00 - 8:50</p>";
	tuesday +="<p>9:00 - 9:50</p>";
	tuesday +="<p>.NET Framework RM 115 @ 10:00 - 10:50</p>";
	tuesday +="<p>Web Design RM 115 @ 11:00 - 12:15</p>";
	tuesday +="<p>*Common Hour @ 12:15 - 1:00PM</p>";
	tuesday +="<p>Web Design RM 115 @ 1:00 - 1:50</p>";
	tuesday +="<p>Microsoft Access RM 204 @ 2:00 - 2:50</p>";
	tuesday +="<p>Microsoft Access RM 204 @ 3:00 - 4:15</p>";
//	tuesday +="<p>Helbig Room 205 @ 2:00 - 2:50</p>";

var wednesday = "<p>8:00 - 8:50</p>";
	wednesday +="<p>9:00 - 9:50</p>";
	wednesday +="<p>.NET Framework RM 115 @ 10:00 - 10:50</p>";
	wednesday +="<p>Web Design RM 115 @ 11:00 - 12:15</p>";
	wednesday +="<p>*Common Hour @ 12:15 - 1:00PM</p>";
	wednesday +="<p>Web Design RM 115 @ 1:00 - 1:50</p>";
	wednesday +="<p>Microsoft Access RM 204 @ 2:00 - 2:50</p>";
	wednesday +="<p>Microsoft Access RM 204 @ 3:00 - 4:15</p>";

var thursday = "<p>.NET Framework RM 115 @ 8:00 - 8:50</p>";
	thursday +="<p>.NET Framework RM 115 @ 9:00 - 9:50</p>";
	thursday +="<p>&nbsp;</p>";
	thursday +="<p>*Business Apps RM 115 @ 11:00 - 12:15</p>";
	thursday +="<p>*Common Hour @ 12:15 - 1:00PM</p>";
    thursday +="<p>Business Apps RM 115 @ 1:00 - 1:50</p>"
	thursday +="<p>Java RM 115 @ 2:00 - 2:50</p>";
	thursday +="<p>Java RM 115 @ 3:00 - 3:50</p>";
//	thursday +="<p>Helbig Room 205 @ 3:00 - 3:50</p>";
	
var monday2h = "<p>.NET Framework RM 115 @ 10:00 - 10:40</p>";
	monday2h +="<p>.NET Framework RM 115@ 10:45 - 11:25</p>";
	monday2h +="<p>&nbsp;</p>";
	monday2h +="<p>*Common Hour @ 12:10 - 12:40PM</p>";
	monday2h +="<p>*Business Apps RM 115 @ 12:40 - 1:20</p>";
    monday2h +="<p>Business Apps RM 115 @ 1:25 - 2:05</p>"
	monday2h +="<p>Java RM 115 @ 2:10 - 2:50</p>";
	monday2h +="<p>Java RM 115 @ 2:55 - 3:35</p>";
//	monday2h +="<p>Helbig Room 205 @ 3:00 - 3:50</p>";

var tuesday2h = "<p>8:00 - 8:50</p>";
	tuesday2h +="<p>9:00 - 9:50</p>";
	tuesday2h +="<p>.NET Framework RM 115 @ 11:30 - 12:10</p>";
	tuesday2h +="<p>*Common Hour @ 12:10 - 1:00PM</p>";
	tuesday2h +="<p>Web Design RM 115 @ 11:00 - 12:15</p>";
	tuesday2h +="<p>Web Design RM 115 @ 1:00 - 1:50</p>";
	tuesday2h +="<p>Microsoft Access RM 204 @ 2:00 - 2:50</p>";
	tuesday2h +="<p>Microsoft Access RM 204 @ 3:00 - 4:15</p>";

var wednesday2h = "<p>8:00 - 8:50</p>";
	wednesday2h +="<p>9:00 - 9:50</p>";
	wednesday2h +="<p>.NET Framework RM 115 @ 10:00 - 10:50</p>";
	wednesday2h +="<p>*Common Hour @ 12:15 - 1:00PM</p>";
	wednesday2h +="<p>Web Design RM 115 @ 11:00 - 12:15</p>";
	wednesday2h +="<p>Web Design RM 115 @ 1:00 - 1:50</p>";
	wednesday2h +="<p>Microsoft Access RM 204 @ 2:00 - 2:50</p>";
	wednesday2h +="<p>Microsoft Access RM 204 @ 3:00 - 4:15</p>";

var thursday2h = "<p>.NET Framework RM 115 @ 8:00 - 8:50</p>";
	thursday2h +="<p>.NET Framework RM 115@ 9:00 - 9:50</p>";
	thursday2h +="<p>&nbsp;</p>";
	thursday2h +="<p>*Common Hour @ 12:15 - 1:00PM</p>";
	thursday2h +="<p>*Business Apps RM 115 @ 11:00 - 12:15</p>";
    thursday2h +="<p>Business Apps RM 115 @ 1:00 - 1:50</p>"
	thursday2h +="<p>Java RM 115 @ 2:00 - 2:50</p>";
	thursday2h +="<p>Java RM 115 @ 3:00 - 3:50</p>";
//	thursday2h +="<p>Helbig Room 205 @ 3:00 - 3:50</p>";	

function figureSchedule(weekDay)
{
	var dayLong = "";
	var tf = false;
	if( (weekDay == 1) &&
		(tf == false) )
	{
		sched = monday;
	}
	else if( (weekDay == 2) &&
			 (tf == false) )
	{
		sched = tuesday;
	}
	else if( (weekDay == 3) &&
			 (tf == false) )
	{
		sched = wednesday;
	}
	else if( (weekDay == 4) &&
			 (tf == false) )
	{
		sched = thursday;
	}
	else if( (weekDay == 1) &&
		     (tf == true) )
	{
		sched = monday2h;
	}
	else if( (weekDay == 2) &&
		     (tf == true) )
	{
		sched = tuesday2h;
	}
	else if( (weekDay == 3) &&
		     (tf == true) )
	{
		sched = wednesday2h;
	}
	else if( (weekDay == 4) &&
		     (tf == true) )
	{
		sched = thursday2h;
	}
	else
	{
		sched = "We don't have school today!";
	}
	document.getElementById("insertText").innerHTML = sched;
}

function main2(truefalse){
	var day = 0;
	var schedule = "";
	var twoH = "<input type='button' onclick='hour2(true)' value='2 Hour Delay'/>";
	
	day = new Date().getDay();
	
	figureSchedule(day, truefalse)
	
	document.getElementById('changeTime').innerHTML = twoH;
}

function otherDay(day){
	var monday = "monday";
	var tuesday = "tuesday";
	var wednesday = "wednesday";
	var thursday = "thursday";
	
	document.getElementById("insertText").innerHTML = day;
}