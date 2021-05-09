import { UserRegistrationData, UserRegistrationResponse } from './../interfaces';
import User from '../entities/User';
import UnauthorizedError from '../errors/UnauthorizedError';

class UserService {
    async createUser(data: UserRegistrationData): Promise<UserRegistrationResponse> {
        const user = this.generateUser(data);
        return user.save();
    }

    async authenticateUserByEmail(email: string): Promise<User> {
        const user = await User.findOne({ email });
        if (!user) {
            throw new UnauthorizedError('Invalid credentials!');
        }
        return user;
    }

    generateUser(userData: UserRegistrationData): User {
        const user = new User();
        user.email = userData.email;
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.password = userData.password;
        return user;
    }
}

const userService = new UserService();
export default userService;