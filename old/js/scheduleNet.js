var monday = "<p>8:00 - 8:50</p>";
	monday +="<p>9:00 - 9:50</p>";
	monday +="<p>Microsoft Server RM 103 @ 10:00 - 10:50</p>";
	monday +="<p>Business Apps RM 205 @ 11:00 - 12:15</p>";
	monday +="<p>*Common Hour @ 11:50 - 1:00PM</p>";
    monday +="<p>Business Apps RM 115 @ 1:00 - 1:50</p>"
	monday +="<p>Cisco RM 103 @ 2:00 - 2:50</p>";
	monday +="<p>Cisco RM 103 @ 3:00 - 3:50</p>";
//	monday +="<p>Helbig Room 205 @ 3:00 - 3:50</p>";

var tuesday = "<p>Microsoft Server RM 103 @ 8:00 - 8:50</p>";
	tuesday +="<p>Microsoft Server RM 103 @ 9:00 - 9:50</p>";
	tuesday +="<p>10:00 - 10:50</p>";
	tuesday +="<p>Web Design RM 115 @ 1:00 - 12:15</p>";
	tuesday +="<p>*Common Hour @ 11:50 - 1:00PM</p>";
	tuesday +="<p>Web Design RM 115 @ 1:00 - 1:50</p>";
	tuesday +="<p>Access RM 204 @ 2:00 - 2:50</p>";
	tuesday +="<p>Access RM 204 @ 3:00 - 3:50</p>";

var wednesday = "<p>8:00 - 8:50</p>";
	wednesday +="<p>Microsoft Server RM 103 @ 9:00 - 9:50</p>";
	wednesday +="<p>10:00 - 10:50</p>";
	wednesday +="<p>Business Apps RM 115 @ 1:00 - 12:15</p>";
	wednesday +="<p>*Common Hour @ 11:50 - 1:00PM</p>";
	wednesday +="<p>Business Apps RM 115 @ 1:00 - 1:50</p>";
	wednesday +="<p>Cisco RM 103 @ 2:00 - 2:50</p>";
	wednesday +="<p>Cisco RM 103 @ 3:00 - 3:50</p>";

var thursday = "<p>8:00 - 8:50</p>";
	thursday +="<p>Microsoft Server RM 103 @ 9:00 - 9:50</p>";
	thursday +="<p>Cisco RM 103 @ 10:00 - 10:50</p>";
	thursday +="<p>Web Design RM 115 @ 11:00 - 12:15</p>";
	thursday +="<p>*Common Hour @ 11:50 - 1:00PM</p>";
    thursday +="<p>Web Design RM 115 @ 1:00 - 1:50</p>"
	thursday +="<p>Access RM 204 @ 2:00 - 2:50</p>";
	thursday +="<p>Access RM 115 @ 3:00 - 3:50</p>";
//	thursday +="<p>Helbig Room 205 @ 2:00 - 2:50</p>";
	
var monday2h = "<p>TCP/IP Room 103 @ 10:00 - 10:40</p>";
	monday2h +="<p>Hardware Room 103 @ 10:45 - 11:25</p>";
	monday2h +="<p>Hardware Room 103 @ 11:30 - 12:10PM</p>";
	monday2h +="<p>*Common Hour @ 12:10 - 12:40</p>";
    monday2h +="<p>UNIX/Linux Room 115 @ 12:40 - 1:20</p>"
	monday2h +="<p>*English II Room 205 @ 1:25 - 2:05</p>";
	monday2h +="<p>C# Programming Room 115 @ 2:10 - 2:50</p>";
	monday2h +="<p>C# Programming Room 115 @ 2:55 - 3:35</p>";
//	monday2h +="<p>Helbig Room 205 @ 3:00 - 3:50</p>";

var tuesday2h = "<p>TCP/IP Room 103 @ 10:00 - 10:40</p>";
	tuesday2h +="<p>TCP/IP Room 103 @ 10:45 - 11:25</p>";
	tuesday2h +="<p>Hardware Room 103 @ 11:30 - 12:10PM</p>";
	tuesday2h +="<p>*Common Hour @ 12:10 - 12:40</p>";
	tuesday2h +="<p>*English Room 205 @ 12:40 - 1:20</p>";
	tuesday2h +="<p>UNIX/Linux Room 115 @ 1:25 - 2:05</p>";
	tuesday2h +="<p>Photoshop Room 115 @ 2:10 - 2:50</p>";
	tuesday2h +="<p>Photoshop Room 115 @ 2:55 - 3:35</p>";
//	tuesday2h +="<p>Helbig Room 205 @ 2:00 - 2:50</p>";

var wednesday2h = "<p>TCP/IP Room 103 @ 10:00 - 10:40</p>";
	wednesday2h +="<p>Photoshop Room 115 @ 10:45 - 11:25</p>";
	wednesday2h +="<p>Hardware Room 103 @ 11:30 - 12:10PM</p>";
	wednesday2h +="<p>*Common Hour @ 12:10 - 12:40</p>";
	wednesday2h +="<p>*English Room 205 @ 12:40 - 1:20</p>";
	wednesday2h +="<p>UNIX/Linux Room 115 @ 1:25 - 2:05</p>";
	wednesday2h +="<p>C# Programming Room 115 @ 2:10 - 2:50</p>";
	wednesday2h +="<p>C# Programming Room 115 @ 2:55 - 3:35</p>";

var thursday2h = "<p>TCP/IP Room 103 @ 10:00 - 10:40</p>";
	thursday2h +="<p>C# Programming Room 115 @ 10:45 - 11:25</p>";
	thursday2h +="<p>Hardware Room 103 @ 11:30 - 12:10PM</p>";
	thursday2h +="<p>*Common Hour @ 12:10 - 12:40</p>";
	thursday2h +="<p>*English Room 205 @  12:40 - 1:20</p>";
	thursday2h +="<p>UNIX/Linux Room 115 @ 1:25 - 2:05</p>";
	thursday2h +="<p>Photoshop Room 115 @ 2:10 - 2:50</p>";
	thursday2h +="<p>Photoshop Room 115 @ 2:55 - 3:35</p>";
//	thursday2h +="<p>Helbig Room 205 @ 2:00 - 2:50</p>";	

function figureSchedule(weekDay, tf)
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