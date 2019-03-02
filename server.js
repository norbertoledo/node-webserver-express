
/**
 * Servicio con Express y http de Node
 */

const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

// process es una variable/objeto global
const port = process.env.PORT || 3000;

/*
---- MIDDLEWARE ----
Callback que se ejecuta siempre, sin importar la url que se solicite
*/
app.use( express.static( __dirname+'/public'));
/*
Hay que tener cuidado de no pisar las url del middleware con la de algun servicio
*/

// Express HBS Engine
hbs.registerPartials( __dirname+'/views/partials');
app.set('view engine', 'hbs');




// Creacion de los servicios 
app.get('/', (req, res) => {
  
    res.render('home',{
        nombre: 'norberto oScar ledo'
    });

})
app.get('/about', (req, res) => {
  
    res.render('about',{
        nombre: 'Norberto'
    });

})

app.get('/data', (req, res) => {
  
    let salida = {
        nombre: "Alicia",
        edad: 40,
        url: req.url
    }

    res.send(salida);

})
 
// Desconocemos el puerto que nos ofrece Heroku.
// Obtenemos el puerto disponible por una variable global
// que la obtenemos arriba con la const port
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

