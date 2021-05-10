import { Router } from 'express';
import addPreorderMeal from './addPreorderMeal';
import getMeals from './getMeals';
import updatePreOrderMeal from './updatePreorderMeal';
import deletePreorderMeals from './deletePreorderMeal';

const router: Router = Router();

const BASE_PATH = '/meals';

router.use(BASE_PATH, addPreorderMeal);
router.use(BASE_PATH, getMeals);
router.use(BASE_PATH, updatePreOrderMeal);
router.use(BASE_PATH, deletePreorderMeals);

export default router;

