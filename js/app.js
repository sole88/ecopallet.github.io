
document.getElementById("formulario").addEventListener("submit", (e) =>{
  e.preventDefault(); //evita envio de formulario
  const usuario = document.getElementById('usuario');
  const email = document.getElementById('email');
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById('mensaje');

 
  if (usuario.value === "") {
    document.getElementById("name").innerHTML="Por favor, escribe tu nombre de usuario."
    usuario.focus();
    return false;
   }
   else{
    document.getElementById("name").innerHTML=""
   }
    
  if (email.value === "") {
    document.getElementById("mail").innerHTML="Por favor, escribe tu correo electrónico";
    email.focus();
    return false;
  }

 else  if (!emailValido(email.value)) {
    document.getElementById("mail").innerHTML="Por favor, escribe un correo electrónico válido";
    email.focus();
    return false;
  }
  else {
    document.getElementById("mail").innerHTML=""
   }

  if (telefono.value === "") {
    document.getElementById("tel").innerHTML="Por favor, ingrese un numero telefonico";
    email.focus();
    return false;
  }

  else if(!telefonoValido(telefono.value)){
    document.getElementById("tel").innerHTML="Numero de telefono invalido";
    telefono.focus();
    return false;
  }
  else{
    document.getElementById("tel").innerHTML=""
   }

 if (mensaje.value === "") {
    document.getElementById("men").innerHTML="Por favor, deje su mensaje para poder enviar."
      usuario.focus();
      return false;
    }
    else{
      document.getElementById("men").innerHTML=""
     }
  })
  

//expresiones regulares
const telefonoValido = telefono => {
  return (/^\d{10}$/.test(telefono)) ;
  }
const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
      icon: "success",
    });
    
  }
}
