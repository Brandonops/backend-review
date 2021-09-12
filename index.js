const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const pokemonData = require('./db/pokemonData');

const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/pokemon', (req, res) => {
    res.render('pokemonList', {
        locals: {
            pokemonData: pokemonData
        }
    });
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});