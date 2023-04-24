import express from 'express'
import {searchPokemonById,deletePokemon,listSearchPokemon,createPokemon,updatePokemon} from './controller.js'

const router = express.Router();
const validateToken = async(req,res,next)=>{
    const acessToken = req.headers['authorization']

};

router.get('/',async (req, res, next) => {
   
    try {
        const pokemon = await listSearchPokemon(req.query);
        return res.json(pokemon);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',async(req,res,next)=>{

    try {
        const pokemon = await searchPokemonById(req.params.id);
        if (pokemon == null) {
            return next(new Error('NOT_EXIST_POKE'));
        }
        return res.json(pokemon);
    } catch (error) {
        next(error);
    }

});

router.post('/',async (req, res, next) => {

    try {
        const newPokemon = await createPokemon(req.body);
        return res.json(newPokemon);
    } catch (error) {
        next(error);
    }

});

router.delete('/:id',async (req, res, next) => {
    
    try {
        const pokemon = await deletePokemon(req.params.id);
        if (pokemon.deletedCount == 0) {
            return next(new Error('NOT_EXIST_POKE'));
        }
        return res.json(pokemon);
    } catch (error) {
        next(error);
    }
    
});

router.put('/:id',async (req, res, next) => {
    
    try {
        const pokemon = await updatePokemon(req.params.id,req.body);
        if(pokemon.upsertedCount == 0){
            return next(new Error('NOT_CANT_UPDATE'));
        }
        return res.json(pokemon);
    } catch (error) {
        next(error);
    }
});


export default router;