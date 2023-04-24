import Pokemon from './model.js';
import jwt from 'jsonwebtoken';

export const listSearchPokemon = async(data) => {

    if(data.name){
        const pokemon = await Pokemon.findOne({name:data});
        return pokemon;
    } else if(data.type){
        const pokemon = await Pokemon.findOne({type:data});
        return pokemon;
    } else{
        const pokemon = await Pokemon.find({});
        return pokemon;
    }
};

export const searchPokemonById = async(id)=>{

    const pokemon = await Pokemon.findOne({_id:id});
    return pokemon
};

export const createPokemon = async(newPokemon) => {

    const pokemon =  new Pokemon(newPokemon);
    await pokemon.save()
    return pokemon;
};

export const updatePokemon = async(id,body) => {

    let pokemon = await Pokemon.updateOne({_id:id},body);

    return pokemon;
};

export const deletePokemon = async(id) => {

    const pokemon = await Pokemon.deleteOne({_id:id});
    return pokemon;
};


