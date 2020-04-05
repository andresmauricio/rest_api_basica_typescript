import { Router } from 'express';
import { getUsers, getUser, createUsers, updateUser, deleteUser } from '../controllers/users.controllers';
const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/',createUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;