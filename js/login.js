
function Registro() {
    var x3 = document.forms["registerform"]["email"].value;
	var x4 = document.forms["registerform"]["password"].value;
	var bandera=0;
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	  if (x3 == null || x3 == "") 
	  {
        alert("Debe escribir su email");
		 bandera=1;
		}
		else
{		
		if ((re.test(x3))== false )
		{
			alert("Ha escrito su email en un formato incorrecto");
			 bandera=1;
			
		}
}
		if (x4 == null || x4  == "")
		{
		alert("Tiene que escribir una contraseña");	
		bandera=1;
		}
		if (bandera==1)
		return false;
		else
		{
        var email1 = $('#inputemail').val();
		var password1 = $('#inputpwd').val();
				ref.createUser({
  email    : email1,
  password : password1
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
	alert("Error creando usuario:" + error.message)
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
	alert("Usuario registrado exitosamente:")
  }
})
 return false;  

		
		}
	
}

function Login() {
    var x3 = document.forms["loginform"]["email2"].value;
	var x4 = document.forms["loginform"]["password2"].value;
	var bandera=0;
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	  if (x3 == null || x3 == "") 
	  {
        alert("Debe escribir su email");
		 bandera=1;
		}
		else
{		
		if ((re.test(x3))== false )
		{
			alert("Ha escrito su email en un formato incorrecto");
			 bandera=1;
			
		}
}
		if (x4 == null || x4  == "")
		{
		alert("Tiene que escribir una contraseña");	
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
  } else {
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