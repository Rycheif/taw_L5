import UserDAO from "../DAO/userDAO";
import applicationException from "../service/applicationException";
import PasswordDAO from "../DAO/passwordDAO";
import sha1 from 'sha1';
import TokenDAO from "../DAO/tokenDAO";

function create(context) {

    async function authenticate(name, password) {
        let userData;
        const user = await UserDAO.getByEmailOrName(name);
        if (!user) {
            throw applicationException.new(applicationException.UNAUTHORIZED,
                'User with that email does not exist');
        }
        userData = await user;
        await PasswordDAO.authorize(user.id, sha1(password));
        const token = await TokenDAO.create(userData);
        return getToken(token);
    }

    function getToken(token) {
        return {token: token.value};
    }

    async function createNewOrUpdate(userData) {
        const user = await UserDAO.createNewOrUpdate(userData);
        if (await userData.password) {
            return await PasswordDAO.createOrUpdate({
                userId: user.id,
                password: sha1(userData.password)
            });
        } else {
            return user;
        }
    }

    async function removeHashSession(userId) {
        return await TokenDAO.remove(userId);
    }

    return {
        authenticate: authenticate,
        createNewOrUpdate: createNewOrUpdate,
        removeHashSession: removeHashSession
    };
}

export default {
    create: create
};

