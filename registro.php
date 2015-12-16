<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuario";
$contra = $_POST['password'];
$email = $_POST['email'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

	$stmt = $conn->prepare('SELECT * FROM usuarios WHERE email = ?');
	
	$stmt->bind_param('s', $email);

    $stmt->execute();

$j =  $stmt->get_result();
 if( mysqli_num_rows($j) != 0){

 	echo '<script language="JavaScript">'; 
	echo 'alert("Error. El email ya existe, vuelve a identificarte");'; 
	echo 'window.location = "registro_usuarios.html"';
	echo '</script>';
}
else{
// A higher "cost" is more secure but consumes more processing power
$cost = 10;

// Create a random salt
$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');

// Prefix information about the hash so PHP knows how to verify it later.
// "$2a$" Means we're using the Blowfish algorithm. The following two digits are the cost parameter.
$salt = sprintf("$2a$%02d$", $cost) . $salt;

$hash = crypt($contra, $salt);

$stmt= $conn->prepare("INSERT INTO usuarios VALUES (?, ?)");
$stmt->bind_param('ss', $email, $hash);
$resultado2= $stmt->execute();

if ($resultado2 === TRUE) {
    echo '<script language="JavaScript">';
    echo 'window.location="index.html"</script>';

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
$conn->close();
?>