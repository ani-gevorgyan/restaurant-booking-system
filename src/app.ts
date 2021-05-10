import express, { Application, Request, Response } from 'express';
import { BASE_URL } from './constants';
import authRouter from './api/auth';
import bookingRouter from './api/booking';
import mealRouter from './api/meal';
import errorHandler from './errors/errorHandler';

async function initializeApp(): Promise<Application> {
    const app: Application = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(BASE_URL, authRouter);
    app.use(BASE_URL, bookingRouter);
    app.use(BASE_URL, mealRouter);

    app.get('/', (req: Request, res: Response) => {
        res.status(200).send('Welcome to Restaurant Booking System!');
    });

    app.all('*', (req: Request, res: Response) => {
        res.status(404).json({ error: 'Route not found' });
    });

    app.use(errorHandler);

    return app;
}

export default initializeApp;