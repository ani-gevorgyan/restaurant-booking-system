import { Router, Request, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import bookingService from '../../services/booking.service';
import { RequestWithUser } from '../../interfaces';

const router: Router = Router();

router.post('/booking',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        const { capacity, dateTime, phoneNumber, email, name } = req.body;
        const userId = req.user.id;
        const bookingData = {
            capacity,
            dateTime,
            phoneNumber,
            email,
            name,
            userId
        }
        const booking = await bookingService.addReservation(bookingData);
        res.status(200).json({ booking });
    }));

export default router;
