import User from '../Model/user.js'
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs'
import { findUser } from '../repository/dbOperation.js'
import { sendWelcomeEmail } from '../Email/email.js'
export const registerUserData = async (userName, email, password) => {
    let getUserFromDB = await findUser(email);
    if (getUserFromDB) {
        return 'User Already Exists! Please Login'
    }
    else {
        try {
            let userPassword = await bcryptjs.hash(password, 10);
            const user = await User.create({
                userName,
                email: email.toLowerCase(),
                password: userPassword,
            });
            await user.save()
            await sendWelcomeEmail(email);
            return user;
        } catch (error) {
            return error
        }

    }
}

export const loginUser = async (email, password) => {
    console.log("email :", email, "--", "password : ", password);
    let user = await findUser(email);
    console.log("response from db :", user);
    if (!user) {
        return 'you have Entered Invalid Email or Password.';
    }
    let comparedPass = await bcryptjs.compare(password, user.password);
    console.log("comparedPass :", comparedPass);
    if (user) {
        if (user && comparedPass) {
            let jwtToken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "2d" });
            user.token = jwtToken;
            await user.save();
            let message = `Welcome ${user.userName}`;
            return { message, jwtToken }
        }
        else {
            return `No Admin Found for Given Data,`
        }
    }
    else {
        return `No Admin Found for Given Data, Please Register Yourself.`
    }
}
