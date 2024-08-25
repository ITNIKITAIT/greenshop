import { Router } from 'express';
import CartController from '../controllers/cartController';
const router = Router();

router.get('/', CartController.getCart);
router.post('/', CartController.addCartItem);
router.patch('/:id', CartController.updateCart);
router.delete('/:id', CartController.deleteCartItem);

export default router;
