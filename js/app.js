document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');

    var validarNombre = function (e) {
        if (formulario.usuario.value == "") {
            document.getElementById("name").innerHTML="Completá el Campo Nombre";
            usuario.focus();
           return false;
        } else{
            document.getElementById("name").innerHTML=""
           }
        return true;
    };
  
    var validarCorreo = function () {
        if (formulario.email.value === "") {
            document.getElementById("mail").innerHTML=("Completá el campo Correo Electrónico");
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
        return true;
    };
  
    var validarTelefono = function () {
        if (formulario.telefono.value == "") {
            document.getElementById("tel").innerHTML="Completá el campo Telefono";
            telefono.focus();
            return false;
        }
        else if(!telefonoValido(telefono.value)){
            document.getElementById("tel").innerHTML="Numero de telefono invalido (hasta 10 digitos del 0 al 9)";
            telefono.focus();
            return false;
          }
        else{
            document.getElementById("tel").innerHTML=""
           }
        return true;
    };
  
    var validarMensaje = function () {
        if (formulario.mensaje.value == "") {
            document.getElementById("men").innerHTML="Completa el campo Mensaje";
            mensaje.focus();
            return false;
        }
        else{
            document.getElementById("men").innerHTML=""
           }
        return true;
    };
  
          var validar = function () {
              return validarNombre() &&
              validarCorreo() &&
              validarTelefono() &&
              validarMensaje();
          };
  
    formulario.addEventListener("submit", handleSubmit);
    async function handleSubmit(event) {
       event.preventDefault();
      if(validar()){
       
       const form = new FormData(this);
       const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                 'Accept': 'application/json'
             }
         });
         if(response.ok){
            this.reset()
            swal({
              title: "Tu mensaje fue enviado!",
              text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
              icon: "success",
            
        })}}}
      })

      //expresiones regulares
const telefonoValido = telefono => {
    return (/^\d{10}$/.test(telefono)) ;
    }
  const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }