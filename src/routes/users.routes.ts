import { Router } from 'express';
import { getUser } from '../controllers/users.controllers';
const router = Router();

router.get('/', getUser);

export default router;