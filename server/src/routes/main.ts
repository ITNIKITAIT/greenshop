import { Router } from 'express';
import productRouter from './productRouter';
import cartRouter from './cartRouter';
import orderRouter from './orderRouter';

const router = Router();

router.use('/products', productRouter);
router.use('/cart', cartRouter);
router.use('/order', orderRouter);

export default router;
