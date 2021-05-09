import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UnauthorizedError from '../errors/UnauthorizedError';
import { AUTH_TOKEN_PREFIX } from '../constants';

const requireToBeAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    let token;
    const jwtKey = process.env.JWT_KEY!;

    if (authorization && authorization.startsWith(AUTH_TOKEN_PREFIX)) {
        token = authorization.split(' ')[1];
    }
    if (!token) {
        throw new UnauthorizedError();
    }
    try {
        const decoded = jwt.verify(token, jwtKey);
        next();
    } catch (err) {
        throw new UnauthorizedError();
    }
}

export default requireToBeAuthenticated;