<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuario";
$contra = $_POST['password2'];
$email = $_POST['email2'];

function hash_equals($str1, $str2)
    {
        if(strlen($str1) != strlen($str2))
        {
            return false;
        }
        else
        {
            $res = $str1 ^ $str2;
            $ret = 0;
            for($i = strlen($res) - 1; $i >= 0; $i--)
            {
                $ret |= ord($res[$i]);
            }
            return !$ret;
        }
    }

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

	$query = "set @var1= '$email'";

	$consulta1 = $conn->query($query);
	
	$query2= "select password, email from usuarios where email = @var1";
	
	$consulta2 = $conn->query($query2);
	
    $resultado = mysqli_fetch_assoc($consulta2);

	if(hash_equals($resultado['password'], crypt($contra, $resultado['password']))){

		session_start();

		$_SESSION["email"] = $resultado["email"];


		echo "Has iniciado sesion"; 
		
		 echo '<script language="JavaScript">';
         echo 'window.location="frontend_usuarios.html"</script>';



	}else

	
$query = "set @var1= '$email'";

	$consulta1 = $conn->query($query);
	
	$query2= "select nombre, password, email from empresas where email = @var1";
	
	$consulta2 = $conn->query($query2);
	
    $resultado = mysqli_fetch_assoc($consulta2);
	
	if (hash_equals($resultado['password'], crypt($contra, $resultado['password'])))
	{
	
	session_start();

		$_SESSION["nom"] = $resultado["nombre"];
		$_SESSION["email"] = $resultado["email"];
		


		echo "Has iniciado sesion"; 
		
		 echo '<script language="JavaScript">';
         echo 'window.location="frontend_empresas.html"</script>';
	
	
	}
	else
	{

		echo "usuario o contraseña incorrectos"; 

	}


$conn->close();
?>