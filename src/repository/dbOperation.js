import User from '../Model/user.js'

export const findUser = async (email) => {
    return await User.findOne({ email });
}