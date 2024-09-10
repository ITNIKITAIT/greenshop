import { Router } from 'express';
import authController from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';
import wishRouter from './wishRouter';
const router = Router();

router.get('/check-auth', authMiddleware, authController.check);
router.get('/verify/:code', authController.verify);

router.post('/login', authController.login);
router.post('/register', authController.register);

router.use('/wishlist', wishRouter);

export default router;
