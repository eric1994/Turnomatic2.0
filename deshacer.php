<?php
$x = false;
if (!$enlace = mysqli_connect("localhost","root","","usuario")) {
    echo 'No pudo conectarse a mysql';
    exit;
}

mysqli_select_db($enlace,"usuario");
$sql = "SELECT num FROM cola WHERE num >=ALL(SELECT num FROM cola)";
$resultado = $enlace->query($sql);
$prueba = mysqli_fetch_assoc($resultado);
$siguiente = $prueba['num']+1;
$sql2 = "INSERT INTO cola VALUES ($siguiente)";
$resultado2 = $enlace->query($sql2);


?>

