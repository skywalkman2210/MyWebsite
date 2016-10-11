<!DOCTYPE html>
<html>
  <head>
    <title>Allen Hazlett Website</title>
    <link href="./css/index.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
		  a:hover 
			{
			  text-decoration: underline;
		  }
	  </style>
		
		<script src="./js/welcome.js" ></script>
		<script src="./js/cookies.js" ></script>
		
  </head>
  
  <body onload="init()">
    <h1>I am currently in the middle of maintaining the site. Sorry for the inconvience!</h1>
    <p>&nbsp;</p>
		
		<p>Welcome <span id="welcome"></span>!</p>
    <p style="align: center;"><a href="./pages/Schedule" class="link">Our Schedule</a></p>
    <p style="align: center;"><a href="./pages/Quiz" class="link">My Quiz</a></p>
		<p>&nbsp;</p>
		<p>Leave me a <a href="./pages/Comment">comment</a>?</p>
		<p>&nbsp;</p>
		
		<input type="text" id="first" name="first" />
		<input type="text" id="last" name="last" />
		<input type="button" id="submit" value="Submit" onclick="getName()"/>
		
  </body>
</html>