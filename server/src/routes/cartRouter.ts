import { Router } from 'express';
import CartController from '../controllers/cartController';
const router = Router();

router.get('/', CartController.getCart);
router.patch('/:id', CartController.updateCart);

export default router;
