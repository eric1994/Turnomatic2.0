<?php
session_start();
echo "Email: ".$_SESSION["email"]."<br>";
echo "Nombre de empresa: ".$_SESSION["nom"]."";
?>