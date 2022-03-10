function Validar(titulo, detalle){
    if(titulo.length == 0){
        return "Error titulo vacio";
    }else{
        return "titulo: " + titulo + " detalle: " + detalle;
    }
  }
  
console.log(Validar("", "xd"));