import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { Application } from 'express';
import initializeApp from './app';

async function startServer(): Promise<Application> {
  try {
    dotenv.config();
    await createConnection();

    const app = await initializeApp();

    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`Magic is happening on port ${port}`);
    });

    return app;
  } catch (error) {
    console.log(`Error ---> ${error}`);
    process.exit(1);
  }
}

startServer();