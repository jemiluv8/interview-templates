import express from 'express';
import { TodoController } from '../controllers/TodoController';

const router = express.Router();

router.post('/', TodoController.create);

router.delete('/:id', TodoController.delete);

export default router;
