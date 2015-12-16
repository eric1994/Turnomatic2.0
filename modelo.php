<?php
include("conexion.php");

$user = $_POST['nombre'];
$pass = $_POST['contrasena']; 

$wish = new conexion; 
$wish->login($user, $pass);
$wish->cerrar(); 




?>