//frontend basico
let url ="http://127.0.0.1:8000/sumar" // conexion de la url de la futura api

let myAPI = url + "?a=5&b=45";

// conexion remota se hace con fetch

async function peticion (){
    let response = await fetch (myAPI);
    let datos = response .json(); //aca la respuesta se convierte en json
    // await - es para esperar hasta que se ejecute la instruccion
// el comportamiento es asincrono si se requiere que se haga una espera
}




