/**
 * Servicio Standard con http de Node
 */

const http = require('http');

// Para escuchar peticiones http creamos el servidor
http.createServer( (req, res)=>{


    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: "Norberto",
        edad: 43,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    //res.write('Hola Mundo');
    //Indicamos que terminamos la respuesta
    res.end();

    
})
// Configurar el puerto eu va a estar escuchando
// Por lo general va en el puerto 3000 o 8080 si lo estamos probando localmente
.listen(8080);

console.log('Escuchando el puerto 8080');

