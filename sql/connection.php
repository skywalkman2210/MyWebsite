<?php
  $host = 'localhost';
  $dbname = 'allenhaz_hazlett';
  $user = 'allenhaz_root';
  $pass = 'RA3Rules';

  //$dsn = "pgsql:dbname=$dbname;host=$host;user=$user;password=$pass";
  

  $db = mysqli_connect($host,$user,$pass,$dbname); 
    
    //new PDO($dsn);