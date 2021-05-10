import { Router, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import bookingService from '../../services/booking.service';
import { RequestWithUser } from '../../interfaces';
import mealService from '../../services/meal.service';

const router: Router = Router();

router.post('/preorder',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        const userId = req.user.id;
        const { bookingId, meals } = req.body;
        const preorderData = {
            userId,
            bookingId,
            meals
        };
        const preorderedMeals = await mealService.preorderMeals(preorderData);
        res.status(200).json({ preorderedMeals });
    })
);

export default router;
