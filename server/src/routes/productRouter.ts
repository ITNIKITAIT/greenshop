import { Router } from 'express';
import ProductController from '../controllers/productController';
const router = Router();

router.get('/', ProductController.getProducts);
router.get('/search', ProductController.getQueryProducts);
router.get('/categories', ProductController.getCategories);
router.get('/category/:id', ProductController.getProductCategory);
router.get('/releted', ProductController.getReletedProducts);
router.get('/:id', ProductController.getProductById);

export default router;
