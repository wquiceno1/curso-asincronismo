// conectar a una api mediante xhttp

const XMLHttppRequest = requiere('xmlhttprquest'); //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //API en mayúscula porque es una referencia que no va a cambiar

//urlApi: no confundir y colocar API
function fetchData(urlApi, callback) { 
    //referencia a new XMLHttpRequest
    let xhttp = new XMLHttppRequest(); 

    //petición "obtener" con true para habilitarlo
    xhttp.open('GET', urlApi, true);
    //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
    xhttp.onreadystatechange = function (event) {
        //si el estado ha sido completada la llamada
        // estado 0 = no se ha inicializado
        // estado 1 = cargando antes de llamar send()
        // estado 2 = ya se ejecuto send()
        // estado 3 = interactuando, descarganado o trabajando con la info
        // estado 4 = llamada completada
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                //el servido responde de forma correcta
                //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
                callback(null, JSON.parse(xhttp.responseText)); 
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null); //es null porque no se está regresando ningún dato
        }
    }
    xhttp.send();
}

