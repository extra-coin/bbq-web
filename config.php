<?php
$config = parse_ini_file('../../secret.ini',true);
$link = mysql_connect($config['database']['host'], $config['database']['username'], $config['database']['password']);
mysql_select_db($config['database']['name'], $link);

$max_BBQ = 70;
$max_visitor = 20;

$query = "SELECT * FROM `" . $config['database']['table']['bbq']. "` WHERE `categ` = \"Visiteur\"" ;
$result = mysql_query($query,$link) ;
$current_visitor = mysql_num_rows($result);

$query = "SELECT * FROM `" . $config['database']['table']['bbq']. "` WHERE `categ` = \"Jeux vidéo\"" ;
$result = mysql_query($query,$link) ;
$current_BBQ = mysql_num_rows($result);

$registration_open = false;

mysql_close($link) ;

?>
