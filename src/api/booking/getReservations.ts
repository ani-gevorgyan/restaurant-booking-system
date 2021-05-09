import { Router, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import bookingService from '../../services/booking.service';
import { RequestWithUser } from '../../interfaces';

const router: Router = Router();

router.get('/bookings',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        const userId = req.user.id;
        const bookings = await bookingService.getReservationsByUserId(userId);
        res.status(200).json({ bookings });
    })
);

export default router;