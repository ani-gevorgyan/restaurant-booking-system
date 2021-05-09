import { Router, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import bookingService from '../../services/booking.service';
import { RequestWithUser } from '../../interfaces';

const router: Router = Router();

router.put('/booking/:id',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        let reservationUpdateData = req.body;
        const bookingId = req.params.id
        const userId = req.user.id;
        reservationUpdateData = { ...reservationUpdateData, userId, bookingId };
        const updatedBooking = await bookingService.updateBooking(reservationUpdateData);
        res.status(200).json({ updatedBooking });
    })
);

export default router;
