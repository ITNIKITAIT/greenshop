import { Router } from 'express';
import wishlistController from '../controllers/wishlistController';
const router = Router();

router.get('/get', wishlistController.getWishList);

router.post('/add', wishlistController.addWishItem);
router.delete('/remove', wishlistController.removeWishItem);

export default router;
