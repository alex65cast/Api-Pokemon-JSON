import express from 'express';
// const express = require('express');
const app = express();
//se encarga de leer cualquier JSON por el body, se usa con post para leer el body  
app.use(express.json());
// app.get('/hello',(req, res) => res.send('Hello world!'));
// app.get('/hola',(req, res) => res.send('Hola mundo'));
// app.post('/hola',(req, res) => res.send('Hola he recibido '+req.body.name));
// EJEMPLO CON POKEMON
const pokeList = [
    {
        id: 1,
        name: "Deoxys",
        type: "Fantasma",
        description: "Es un pokemon legendario"
    },
    {
        id: 2,
        name: "Pikachu",
        type: "Electrico",
        description: "Es un pokemon normal"
    }
];
app.get('/Pokemon', (req, res) => {
    res.json(pokeList.map((e) => {
        return { id: e.id, nombre: e.name, tipo: e.type
        };
    }));
});
const searchIdPokemon = () => {
    app.get('/Pokemon/:id', (req, res) => {
        let idPokemon = Number(req.params.id);
        res.json(pokeList.find((e) => {
            return e.id == idPokemon;
        }));
    });
};
app.post('/Pokemon', (req, res) => {
    const newObject = req.body;
    let contador = pokeList.length + 1;
    newObject.id = contador++;
    pokeList.push(newObject);
    return res.json(newObject);
});
app.put('/Pokemon/:id', (req, res) => {
    let idPokemon = Number(req.params.id);
    const newObject = req.body;
    let pokemonFind = pokeList.find((e) => {
        return idPokemon == e.id;
    });
    if (!pokemonFind) {
        res.status(404).json({ error: 'NOT_EXIST', idPokemon });
    }
    pokemonFind.id = pokemonFind.id;
    pokemonFind.name = newObject.name;
    pokemonFind.type = newObject.type;
    pokemonFind.description = newObject.description;
    return res.json(pokemonFind);
});
app.delete('/Pokemon/:id', (req, res) => {
    let idPokemon = Number(req.params.id);
    return res.json(pokeList.filter((e) => {
        return e.id !== idPokemon;
    }));
});
// const router = express.Router();
// router.get('/', pokemonList);
// router.post('/', createPokemon);
// app.use('/Pokemon', router);
// app.post('/Pokemon',(req, res) => res.send('Hola he recibido '+pokeList));
app.listen(3000, () => console.log('Servidor levantando en el puerto 3000'));
// Creacion, modificacion y borrado
//# sourceMappingURL=hello.js.map