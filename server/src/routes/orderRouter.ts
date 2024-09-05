import { Router } from 'express';
import OrderController from '../controllers/orderController';
const router = Router();

router.post('/', OrderController.createOrder);
router.post('/callback', OrderController.updateOrder);
router.get('/:orderId', OrderController.getOrderById);
router.get('/user/:userId', OrderController.getOrdersyUserId);

export default router;
