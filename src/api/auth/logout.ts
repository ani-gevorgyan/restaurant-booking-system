import { Router, Request, Response } from 'express';
import asyncMiddlewareWrapper from '../../middlewares/asyncMiddlewareWrapper';
import requireToBeAuthenticated from '../../middlewares/requireToBeAuthenticated';
import { RequestWithUser } from '../../interfaces';

const router: Router = Router();

router.post('/logout',
    asyncMiddlewareWrapper(requireToBeAuthenticated),
    asyncMiddlewareWrapper(async (req: RequestWithUser, res: Response) => {
        res.status(200).json({});
    }));

export default router;