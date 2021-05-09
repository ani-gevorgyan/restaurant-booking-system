import { Request } from 'express';

export interface UserRegistrationData {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

export interface UserRegistrationResponse {
    email: string;
    firstName: string;
    lastName: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}

export interface RequestWithUser extends Request {
    user: {
        id: number
    }
}