import { Router } from 'express';
import productRouter from './productRouter';
import cartRouter from './cartRouter';
import orderRouter from './orderRouter';
import authRouter from './authRouter';

const router = Router();

router.use('/products', productRouter);
router.use('/cart', cartRouter);
router.use('/order', orderRouter);
router.use('/auth', authRouter);

export default router;
