import { Router } from 'express';
import OrderController from '../controllers/orderController';
const router = Router();

router.post('/', OrderController.createOrder);

export default router;
