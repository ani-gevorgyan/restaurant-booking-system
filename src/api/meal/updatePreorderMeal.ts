import { Router, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import { RequestWithUser } from '../../interfaces';
import mealService from '../../services/meal.service';

const router: Router = Router();

router.put('/preorder',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        const { bookingId, meals } = req.body;
        const updatedMeals = await mealService.updatePreorderMealForABooking(bookingId, meals);
        res.status(200).json({ updatedMeals });
    })
);

export default router;