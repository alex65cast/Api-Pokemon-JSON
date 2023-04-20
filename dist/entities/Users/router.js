import express from 'express';
import { searchUserById, deleteUser, listSearchUser, createUser, updateUser } from './controller.js';
const router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        const user = await listSearchUser(req.query);
        return res.json(user);
    }
    catch (error) {
        next(error);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const user = await searchUserById(req.params.id);
        if (user == null) {
            return next(new Error('NOT_EXIST_USER'));
        }
        return res.json(user);
    }
    catch (error) {
        next(error);
    }
});
router.post('/', async (req, res, next) => {
    try {
        const newUser = await createUser(req.body);
        return res.json(newUser);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        const user = await deleteUser(req.params.id);
        if (user.deletedCount == 0) {
            return next(new Error('NOT_EXIST_USER'));
        }
        return res.json(user);
    }
    catch (error) {
        next(error);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        if (user.upsertedCount == 0) {
            return next(new Error('NOT_CANT_UPDATE'));
        }
        return res.json(user);
    }
    catch (error) {
        next(error);
    }
});
export default router;
//# sourceMappingURL=router.js.map