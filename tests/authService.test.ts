import { createConnection } from 'typeorm';
import faker from 'faker';
import authService from '../src/services/auth.service';
import BadRequestError from '../src/errors/BadRequestError';
import UnauthorizedError from '../src/errors/UnauthorizedError';

describe('Test authService', () => {

    const password = faker.internet.password();

    const userRegistrationData = {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password,
        confirmPassword: password
    }

    const userLoginData = {
        email: userRegistrationData.email,
        password
    }

    beforeAll(async () => {
        await createConnection();
    });

    it('Should return the newly created user when calling with correct credentials', async () => {
        const result = await authService.signup(userRegistrationData);
        expect(result.email).toBe(userRegistrationData.email);
        expect(result.firstName).toBe(userRegistrationData.firstName);
        expect(result.lastName).toBe(userRegistrationData.lastName);
    });

    it('Should throw BadRequestError when password and confirm password do not match', async () => {
        try {
            const data = { ...userRegistrationData, confirmPassword: faker.internet.password() };
            await authService.signup(data)
        } catch (err) {
            expect(err).toBeInstanceOf(BadRequestError);
            expect(err.message).toBe('Confirm password and password do not match!');
        }
    });

    it('Should successfully login and return the authToken when called with correct credentials', async () => {
        const result = await authService.login(userLoginData);
        expect(result).toBeDefined();

    })

    it('Should throe UnauthorizedError when called with incorrect email', async () => {
        try {
            const invalidLoginData = { ...userLoginData, email: faker.internet.email() };
            await authService.login(invalidLoginData);

        } catch (err) {
            expect(err).toBeInstanceOf(UnauthorizedError);
            expect(err.message).toBe('Invalid credentials!');
        }
    });

    it('Should throw UnauthorizedError when called with incorrect passord', async () => {
        try {
            const invalidLoginData = { ...userLoginData, password: faker.internet.password() };
            await authService.login(invalidLoginData);
        } catch (err) {
            expect(err).toBeInstanceOf(UnauthorizedError);
            expect(err.message).toBe('Invalid email or password!');
        }
    });

})