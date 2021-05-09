import { Router } from 'express';
import addReservation from './addReservation';

const router: Router = Router();

const BASE_PATH = '/';

router.use(BASE_PATH, addReservation);

export default router;