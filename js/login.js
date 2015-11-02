
function Registro() {
    var nombre = document.forms["registerform"]["nombre"].value;
    var correo = document.forms["registerform"]["email"].value;
	var contrasenia = document.forms["registerform"]["password"].value;
	var contrasenia2 = document.forms["registerform"]["password2"].value;
	var bandera=0;
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		 if (nombre == null || nombre == "")
	 	{
	        alert("Debe escribir su nombre");
			bandera=1;
		}
	  	if (correo == null || correo == "") 
	  	{
	         alert("Debe escribir su email");
			 bandera=1;
		}
		else
		{		
			if ((re.test(correo))== false )
			{
				alert("Ha escrito su email en un formato incorrecto");
				 bandera=1;
				
			}
		}

		if (contrasenia == null || contrasenia  == "")
		{
			alert("Tiene que escribir una contrasenia");	
			bandera=1;
		}
		if (contrasenia != contrasenia2 )
		{
			alert("Las contrasenias no coinciden");	
			bandera=1;		
		}
		if (bandera==1)
		return false;
		var nombre1 = $('#inputnombre').val();
        var email1 = $('#inputemail').val();
		var password1 = $('#inputpwd').val();
		var sexo1 = $('input[name="genero"]:checked').val();
		var mes1 = $('#mes').val();
		var dia1 = $('#dia').val();
		var anio1 = $('#age').val();
		 userRef
		.orderByChild('Nombre')
      	.startAt(nombre)
    	.endAt(nombre)
	 	.once('value', show);
	 	function show(snap) {
	 		if(snap.val()!=null){
   				alert("Ya existe un usuario con ese nombre");
   				return false; 
   		}
     		else
	  		{
	  			ref.createUser({
  					email    : email1,
  					password : password1
				}, function(error, userData) {
					  if (error) {
					    console.log("Error creating user:", error);
						if (error.message!="The browser redirected the page before the login request could complete.")
							alert("Error creando usuario:" + error.message)
			  		  } 
			  		  else {
					    console.log("Successfully created user account with uid:", userData.uid);
						alert("Usuario registrado exitosamente:")
						userRef.child(nombre1).set({Nombre: nombre1, Email: email1, Sexo: sexo1, Dia: dia1, Mes: mes1, Anio: anio1});
						window.open("registro.html", "_self")
					  }
					})
	  	}
	}

	 return false;  
	
}










function Login() {
    var correo = document.forms["loginform"]["email2"].value;
	var contrasenia = document.forms["loginform"]["password2"].value;
	var bandera=0;
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	  if (correo == null || correo == "") 
	  {
        alert("Debe escribir su email");
		 bandera=1;
	  }
		else
		{		
			if ((re.test(correo))== false )
			{
				alert("Ha escrito su email en un formato incorrecto");
				 bandera=1;
				
			}
		}
		if (contrasenia == null || contrasenia  == "")
		{
			alert("Tiene que escribir una contrase�a");	
			bandera=1;
		}
		if (bandera==1)
		return false;
		else
		{
        var email1 = $('#inputemail2').val();
		var password1 = $('#inputpwd2').val();
				ref.authWithPassword({
					  email    : email1,
					  password : password1
				}, function(error, authData) {
					  if (error) {
					    console.log("Login Failed!", error);
						alert("Login fallido:" + error.message)
					  } 
					  else {
					    console.log("Authenticated successfully with payload:", authData);
						alert("Login exitoso")
						window.open("index2.html", "_self")
					  }
	  			},
  		{		
  			 remember: "sessionOnly"
		});
	return false;  

		
	}
	
}



var ref = new Firebase("https://turbomatic2.firebaseio.com");
var userRef = ref.child("users");
