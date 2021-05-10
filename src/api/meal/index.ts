import { Router } from 'express';
import preorderMeal from './preorderMeal';

const router: Router = Router();

const BASE_PATH = '/meals';

router.use(BASE_PATH, preorderMeal);

export default router;

