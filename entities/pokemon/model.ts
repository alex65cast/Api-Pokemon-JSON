import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        min:3,
        max:100
    },
    type:{
        type:String,
        required:true,
        min:3,
        max:100
    },
    description:String

}, { versionKey: false });

const Pokemon = mongoose.model('Pokemon',PokemonSchema);

export default Pokemon;