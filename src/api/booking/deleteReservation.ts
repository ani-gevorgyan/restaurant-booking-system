import { Router, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import bookingService from '../../services/booking.service';
import { RequestWithUser } from '../../interfaces';

const router: Router = Router();

router.delete('/booking/:id',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        const id = +req.params.id;
        await bookingService.deleteReservation(id);
        res.status(200).json({ message: 'Reservation Deleted!' });
    })
);

export default router;