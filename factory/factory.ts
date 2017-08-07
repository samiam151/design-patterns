interface IUser {
    username: string;
    userType: string;
}

abstract class UserFactory implements IUser {
    username: string;
    userType: string;
    constructor(username: string, userType: string) {
        this.username = username;
        this.userType = userType;
    }

    // public createUser(): IUser {

    // }
}

