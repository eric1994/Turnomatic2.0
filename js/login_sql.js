
function Registro() {

	 var x2 = document.forms["registerform"]["email2"].value;
    var x3 = document.forms["registerform"]["email"].value;
	var x4 = document.forms["registerform"]["password"].value;
	var x5 = document.forms["registerform"]["password2"].value;
	var bandera=0;
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	  if (x3 == null || x3 == "") {
        alert("Debe escribir su email");
		 bandera=1;
		}

		else{		
			if ((re.test(x3))== false )
			{
				alert("Ha escrito su email en un formato incorrecto");
				 bandera=1;
			}
		}
		
		if (x2.localeCompare(x3)!=0)
		{
		alert("Los emails no coinciden");	
		bandera=1;	
		}
		

		if (x4 == null || x4  == ""){
		alert("Tiene que escribir una contraseña");	
		bandera=1;
		}
		
		if (x4.localeCompare(x5)!=0)
		{
		alert("Las contraseñas no coinciden");	
		bandera=1;	
		}
		
		if (bandera==1)
			return false;
		
		else{
	 
 			return true;  
		}
	
}

function Login() {
    var x3 = document.forms["loginform"]["email2"].value;
	var x4 = document.forms["loginform"]["password2"].value;
	var bandera=0;
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	  if (x3 == null || x3 == "") {
        alert("Debe escribir su email");
		 bandera=1;
		}
		else{		
			if ((re.test(x3))== false ){
				alert("Ha escrito su email en un formato incorrecto");
				bandera=1;
			}
		}
		if (x4 == null || x4  == ""){
			alert("Tiene que escribir una contraseña");	
			bandera=1;
		}
		if (bandera==1)
			return false;
				else{
		
			 		return true;  		
				}	
		}



