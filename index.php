<?php
  include("sql/connection.php");
  $result = $db->query("SELECT users.username AS poster, posts.content AS content FROM users, posts WHERE users.id = posts.postedBy;");
  $comments = $db->query("SELECT comment.content AS 'commentContent', users.username AS 'commenter' FROM comment, users WHERE posts.id = comment.postId");
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Allen Hazlett | Home Page </title>
    <link href="css/index.css" rel="stylesheet" type="text/css" />
  </head>
  
  <body>
    <p id='mainParagraph'>Coming to you <span id="live">live</span>.</p>
    
    <p>&nbsp;</p>
    
    <p>
        <?php foreach($result as $row): ?>
					<table class="post">
            <tr>
              <td class="posterContainer"><h1 class="postedby">From: <?= $row["poster"]; ?></h1></td>
            </tr>
            <tr>
              <td class="contentContainer"><p class="content"><?= $row["content"]; ?></p></td>
            </tr>
            <?php foreach ($comments as $comment): ?>
              <tr>
                <td>
                  <p><?= $comment['commenter']; ?><br/>
                     <?= $comment['commentContent']; ?>
                </td>
              </tr>
            <?php endforeach; ?>
          </table>
				<?php endforeach; ?>
    </p>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="script/index.js"></script>
  </body>
</html>