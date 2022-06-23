function comprueba_extension(archivo) {
    //funcion para comprobar la extesion del archivo
    if (!archivo) {

        alert("No hay archivo");
    } else {

        extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
        permitida = false;
        if (".pdf" === extension) {
            return extension;
        } else {
            return 0;
        }
    }
    return 0;
} 