import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
const PokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String
}, { versionKey: false });
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
router.get('/:id', async (req, res) => {
    const pokemon = await Pokemon.findOne({ _id: req.params.id });
    if (pokemon == null) {
        return res.status(404).json({ error: 'NOT_EXIST' });
    }
    return res.json(pokemon);
});
router.post('/', async (req, res) => {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    return res.json(pokemon);
});
router.put('/:id', async (req, res) => {
    let pokemon = await Pokemon.updateOne({ _id: req.params.id }, req.body);
    if (pokemon.upsertedCount == 0) {
        return res.status(404).json({ error: 'NOT_EXIST' });
    }
    return res.json(pokemon);
});
router.get('/', async (req, res) => {
    if (req.query.name) {
        const pokemon = await Pokemon.findOne({ name: req.query.name });
        return res.json(pokemon);
    }
    if (req.query.type) {
        const pokemon = await Pokemon.findOne({ type: req.query.type });
        return res.json(pokemon);
    }
    else {
        const pokemon = await Pokemon.find({});
        return res.json(pokemon);
    }
});
router.delete('/:id', async (req, res) => {
    const pokemon = await Pokemon.deleteOne({ _id: req.params.id });
    if (pokemon.deletedCount == 0) {
        return res.status(404).json({ error: 'NOT_EXIST' });
    }
});
export default router;
//# sourceMappingURL=pokemon.js.map