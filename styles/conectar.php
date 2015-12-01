<?php

class conexion{

private $conexion; 
private $server = "localhost"; 
private $usuario = "root"; 
private $pass = "";
private $db = "usuario"; 
private $user ; 
private $password;


public function __construct(){

	$this->conexion = new mysqli($this->server, $this->usuario, $this->pass, $this->db);

	if($this->conexion->connect_errno){

		die("Fallo al trratar de conectar con MySQL: (". $this->conexion->connect_errno.")");


	}
}

public function cerrar(){

	$this->conexion->close();

}


public function login($usuario, $pass){

	$this->user = $usuario;
	$this->password = $pass;

	$query = "select  * from num";

	$consulta = $this->conexion->query($query);


	if($row = mysqli_fetch_array($consulta)){

		session_start();

		$_session['nume'] = $row['num'];
		echo $_session['nume'];
		
		echo "Has iniciado sesion"; 



	}else {

		echo "usuario o contraseña incorrectos"; 

	}

}

}

?>