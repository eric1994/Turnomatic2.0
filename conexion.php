<?php
$x = false;
if (!$enlace = mysqli_connect("localhost","root","","usuario")) {
    echo 'No pudo conectarse a mysql';
    exit;
}

mysqli_select_db($enlace,"usuario");
$sql = "SELECT num FROM cola WHERE num >=ALL(SELECT num FROM cola)";
$resultado = $enlace->query($sql);

if (!$resultado) {
    echo "Error de BD, no se pudo consultar la base de datos\n";
    echo "Error MySQL: ' . mysql_error()";
    exit;
}


while ($fila = mysqli_fetch_assoc($resultado)) {
	$x=true;
    echo "<div id='act'>".$fila['num']."</div>";
}

if(!$x){
		echo "<div id='act'>0</div>";
}



mysqli_free_result($resultado);

?>