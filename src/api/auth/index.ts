import { Router } from 'express';
import signup from './signup';
import login from './login';
import logout from './logout';

const router: Router = Router();

const BASE_PATH = '/auth';

router.use(BASE_PATH, signup);
router.use(BASE_PATH, login);
router.use(BASE_PATH, logout);

export default router;
