import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
    
    name:String,
    type:String,
    description:String

}, { versionKey: false });

const Pokemon = mongoose.model('Pokemon',PokemonSchema);

export default Pokemon;