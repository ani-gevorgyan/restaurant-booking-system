import { Router, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import { RequestWithUser } from '../../interfaces';
import mealService from '../../services/meal.service';

const router: Router = Router();

router.delete('/preorder/:bookingId',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        const bookingId = +req.params.bookingId;
        await mealService.deletePreorderMeals(bookingId);
        res.status(200).json({ message: 'Preordered Meals deleted successfully!' })
    })
);

export default router;
