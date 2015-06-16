<?php
$config = parse_ini_file('../../secret.ini',true);
$link = mysql_connect($config['database']['host'], $config['database']['username'], $config['database']['password']);
mysql_select_db($config['database']['name'], $link);

$max_BBQ_LU = 50;
$max_BBQ_FR = 50;

$query = "SELECT * FROM `" . $config['database']['table']['bbq']. "` WHERE `categ` = \"Technoport\"" ;
$result = mysql_query($query,$link) ;
$current_BBQ_LU = mysql_num_rows($result);

$query = "SELECT * FROM `" . $config['database']['table']['bbq']. "` WHERE `categ` = \"Blida\"" ;
$result = mysql_query($query,$link) ;
$current_BBQ_FR = mysql_num_rows($result);

$registration_open = true;

mysql_close($link) ;

?>
