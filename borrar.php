<?php

if (!$enlace = mysqli_connect("localhost","root","","usuario")) {
    echo 'No pudo conectarse a mysql';
    exit;
}

mysqli_select_db($enlace,"usuario");

$sql = "SELECT num FROM cola WHERE num >=ALL(SELECT num FROM cola)";
$resultado = $enlace->query($sql);
$prueba = mysqli_fetch_assoc($resultado);
$sql2= "DELETE FROM cola WHERE num=$prueba[num]";
$borrado = $enlace->query($sql2);
?>