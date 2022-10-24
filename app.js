
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault(); //evita envio de formulario
  const usuario = document.getElementById('usuario');
  const email = document.getElementById('email');
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById('mensaje');

  if (usuario.value === "") {
    document.getElementById("name").innerHTML="Por favor, escribe tu nombre de usuario."
    usuario.focus();
    document.getElementById("submit").addEventListener("click", clean())
    return false;
   } 
    
  if (email.value === "") {
    document.getElementById("mail").innerHTML="Por favor, escribe tu correo electrónico";
    email.focus();
    return false;
  }

  if (!emailValido(email.value)) {
    document.getElementById("mail").innerHTML="Por favor, escribe un correo electrónico válido";
    email.focus();
    return false;
  }

  if (telefono.value === "") {
    document.getElementById("tel").innerHTML="Por favor, ingrese un numero telefonico";
    email.focus();
    return false;
  }

  if(!telefonoValido(telefono.value)){
    document.getElementById("tel").innerHTML="Numero de telefono invalido";
    telefono.focus();
    return false;
  }

  if (mensaje.value === "") {
    document.getElementById("men").innerHTML="Por favor, deje su mensaje para poder enviar."
      usuario.focus();
      return false;
    }

  
  return true; //Se pueden enviar los datos del formulario al servidor
})

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const telefonoValido = telefono =>{
return (/^\d{10}$/.test(valor));
}

function clean(){
  document.getElementsByTagName("p").value="";
}