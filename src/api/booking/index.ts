import { Router } from 'express';
import addReservation from './addReservation';
import deleteReservation from './deleteReservation';
import getReservations from './getReservations';
import updateReservation from './updateReservation';

const router: Router = Router();

const BASE_PATH = '/';

router.use(BASE_PATH, addReservation);
router.use(BASE_PATH, deleteReservation);
router.use(BASE_PATH, getReservations);
router.use(BASE_PATH, updateReservation);

export default router;