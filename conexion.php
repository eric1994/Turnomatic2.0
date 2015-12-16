<?php

class conexion{

private $conexion; 
private $server = "localhost"; 
private $usuario = "root"; 
private $pass = "";
private $db = "usuarios"; 
private $email ; 
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

	$this->email = $usuario;
	$this->password = $pass;

	$query = "select password from gusers where email = '".$this->email."'";

	$consulta = $this->conexion->query($query);


	if(hash_equals($consulta, crypt($this->password, $consulta))){

		session_start();

		$_session['nom'] = $row['email'];


		echo "Has iniciado sesion"; 



	}else {

		echo "usuario o contraseña incorrectos"; 

	}

}

}

?>