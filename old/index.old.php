<!DOCTYPE HTML>
<html>
	
<head>
	<meta charset="UTF-8" />

	<script src="js/index.js"></script>
	<script src="spry/SpryMenuBar.js" type="text/javascript"></script>

	<link href="spry/SpryMenuBarHorizontal2.css" rel="stylesheet" type="text/css" />
	<link href="css/index.css" rel ="stylesheet" type="text/css" />
	<link href="img/favicon.gif" rel="icon" type="image/gif" />

	<title>Allen Hazlett Website</title>
	<style type="text/css">
		a.comment:hover {
			text-decoration: underline;
		}
	</style>
</head>

<body>
	<p>
	<h1 id="place3"> 

	<?php 
		if(!isset($_COOKIE['user'])) {
			echo "Hello";
		}
		else {
			echo $_COOKIE['user'].", welcome to my site!";
		}
	?>
	
	</h1>
	</p>
	
	<p id="ray">
	<?php 
		if(!isset($_COOKIE['user'])) {
			echo "Please enter your name for future reference!<br/>";
			echo "<form action='php/show.php' method='post'><br/>";
			echo "Name: <input type='text' name='name'/><br/>";
			echo "<input type='submit'/>";
			echo "</form>";
		}
		else {
			echo "Thanks for your input!<br/><br/>";
		}
	?>
	</p>
	
	Please, feel free to leave me a <a href="pages/comment.php">comment</a> on my site!<br/>
	<a href="pages/comment.php" class="comment">My comment page</a>

	<p>&nbsp;</p>
	<hr/>
	<p>&nbsp;</p>

	<br/>

	<ul style="align: center;" id="MenuBar1" class="MenuBarHorizontal">
  	<li align="center"><a class="MenuBarItemSubmenu" href="#">Javascript</a>
     	 <ul style="align: center;">
     	   <li align="center"><a href="pages/quiz.php">My Quiz</a></li>
     	   <li align="center"><a href="pages/messager.htm">Question?</a></li>
    	   <li align="center"><a href="pages/scheduleMenu.htm">Schedule</a></li>
    	  </ul>
 	 	</li>
 	 	<li align="center"><a class="MenuBarItemSubmenu" href="#">School Links</a>
   	   <ul align="center">
   	     <li align="center"><a href="https://aws.southhills.edu/drives/login.aspx?ReturnUrl=%2fdrives">School Access from Home</a></li>
   	     <li align="center"><a href="http://cyan.southhills.edu/owa/auth/logon.aspx?replaceCurrent=1&url=http%3a%2f%2fcyan.southhills.edu%2fowa%2f">School Email</a></li>
   	     <li align="center"><a href="htr.pdf">How to Respond</a></li>
		  </ul>
 	 	</li>
 	 	<li align="center"><a class="MenuBarItemSubmenu" href="#">Useful Links</a>
	 	 	<ul align="center">
	 	 		<li align="center"><a href="https://www.facebook.com">Facebook</a></li>
				<li align="center"><a href="https://www.google.com">Google</a></li>
				<li align="center"><a href="https://mail.google.com">GMail</a></li>
				<li align="center"><a href="https://www.yahoo.com">Yahoo!</a></li>
				<li align="center"><a href="https://mail.yahoo.com">Yahoo! Mail</a></li>
	  	</ul>
  	</li>
  	<li align="center"><a class="MenuBarItemSubmenu" href="#">My pages</a>
	  	<ul align="center">
	  		<li align="center"><a href="pages/blog">My Blog</a></li>
	  	</ul>
  	</li>
	</ul>
	
	<script type="text/javascript">
		var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgDown:"SpryMenuBarDownHover.gif", imgRight:"SpryMenuBarRightHover.gif"});
		var MenuBar2 = new Spry.Widget.MenuBar("MenuBar2", {imgRight:"SpryMenuBarRightHover.gif"});
	</script>

	<br/>
	<hr/>

	<p>&nbsp;</p>

	<p><a onclick="changeTotally()">This site is TOTALLY Interactive... Don't believe me try for yourself!</a></p>
	<a onclick="name2()" id="userName">Mike</a>

	<p>&nbsp;</p>

	<p>Type anything!:</p>
	<p><input type="text" id="textb1" /><input type="button" value="Submit" id="sub1" onclick="name3()"/></p>
	<!-- You cannot see the code! but it is there! with Javascript or HTML, you would see it!-->

	<p>&nbsp;</p>
	
	<?php
		$Believe = "Don't believe me just look!<br/>";
		echo "This is PHP, not Javascript or HTML.... PHP<br/>";
		echo "$Believe <br/>";
		echo "<a href='view-source:http://localhost/index.php'>View my Source</a>";
	?> 

	<p>&nbsp;</p>

	<p>
		<?php 
			if(!isset($_COOKIE['flavor'])) {
				echo "<form action='php/show2.php' method='post'>";
				echo "What is your favorite ice cream flavor?<br/>";
				echo "<input type='radio' name='flavor' value='Vanilla' />Vanilla<br/>";
				echo "<input type='radio' name='flavor' value='Chocolate' />Chocolate<br/><input type='radio' name='flavor' value='Strawberry' />Strawberry<br/>";
				echo "<input type='submit'/>";
				echo "</form>";
			}
			else {
				echo "Your favorite flavor was ". $_COOKIE['flavor'] ."<br/><br/>";
			}
		?>
	</p>
	
	<p id="place1">&nbsp;</p>
	<p id="place2">&nbsp;</p>
	<p id="copyright">Allen Hazlett Website. Created by Allen Hazlett. Contact Webmaster for comments.</p>
	<p id="build">Version 1.1.00000000</p>
</body>

</html>