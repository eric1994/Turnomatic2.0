
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

function comprobarClave(){
	
	//alert("Entre en Comprobar Clave");
   //var clave1 = document.getElementById("clave1"); //
   var clave1;
   clave1 = $("#clave1").val();
   //var clave2 = document.getElementById("clave2");
   var clave2;
   clave2 = $("#clave2").val();

   //alert(clave1+" "+clave2);

    if (clave1 != clave2)//||(!clave2.value)||(!clave1.value))//|| (clave2.length == 0 || clave1.length == 0))
       {
   		console.log(clave2);
   		console.log(clave1);
   		alert("mal");
   		return false;
   		}
    else
       //alert("Las dos claves son distintas...\n");
   		{
   			
   		alert("Las dos claves  son iguales...\n");
   		}
}

function validar()
{
	var enviar=true;
	var expRegNombre= /^[a-záéíóúñ\s]+$/i;
	var expRegApellido=/^[a-záéíóúñ\s]+$/i;
	var expRegEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var email = document.getElementById("email");
	var formulario= document.getElementById("formulario");
	


if(!nombre.value)
	{
		alert("escriba su nombre por favor");
		return false;
		nombre.focus();
	}
	else if (!expRegNombre.exec(nombre.value)) {
		alert("Este campo solo acepta letras");
		return false;
		nombre.focus();

	}
	else if (!apellido.value) {
		alert("escriba su apellido por favor");
		return false;
		apellido.focus();
	}
	else if(!expRegApellido.exec(apellido.value)){
	alert("Este campo solo acepta letras");
		return false;
		apellido.focus();	
		
	}

	else if (!email.value) {
		alert("Introdusca email,por favor");
		return false;
		email.focus();
	}
	else if(!expRegEmail.exec(email.value)){
		alert("Este campo está mal escrito");
		return false;
		email.focus();
	}


/*else if ( password == null || password.length == 0 || password2 == null || password2.length == 0 || password != password2 ) {
    if (password != password2) {
      alert('[ERROR] El campo Password es diferente');
      return false;
    } else {
      alert('[ERROR] El campo Password esta vacio');
      return false;
    }
  }*/
	if (enviar){
		return true;
		//document.formulario.submit();
	}
} 
/*
window.onload=function(){

	var botonen= document.getElementById("enviar");
	botonen.onclick=validar;
}*/