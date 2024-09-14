<?php

$cookie_name = "user";
$cookie_value = "Ben";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

$cookie2_name = "color";
$cookie2_value = "black";
setcookie($cookie2_name, $cookie2_value, time() + (86400 * 30), "/");

$cookie3_name = "code";
$cookie3_value = "3j2h5t24uth";
setcookie($cookie3_name, $cookie3_value, time() + (86400 * 30), "/", null, false, true);

?>

