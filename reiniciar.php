<?php

if (!$enlace = mysqli_connect("localhost","root","","usuario")) {
    echo 'No pudo conectarse a mysql';
    exit;
}

mysqli_select_db($enlace,"usuario");

$sql2= "DELETE FROM cola";
$borrado = $enlace->query($sql2);
?>