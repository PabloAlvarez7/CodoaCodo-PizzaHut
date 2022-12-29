function valida_envia(){

//valido el nombre
if (document.fvalida.nombre.value.length==0){
  alert("Tiene que escribir su nombre")
  document.fvalida.nombre.focus()
  return false;
}

 if (document.fvalida.email.value.length==0) {
        alert("Tiene que escribir su email")
  document.fvalida.email.focus()
    return false;
  }
    if (document.fvalida.mensaje.value.length==0) {
        alert("Tiene que escribir su mensaje.")
      document.fvalida.mensaje.focus()
       return false;
    }
    alert("Enviando el formulario");
     document.fvalida.submit();

}
