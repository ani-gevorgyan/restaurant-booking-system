import { Router, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import { RequestWithUser } from '../../interfaces';
import mealService from '../../services/meal.service';

const router: Router = Router();

router.get('/',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        const meals = await mealService.getMeals();
        res.status(200).json({ meals });
    })
);

export default router;