import { registerUserData, loginUser } from '../Services/userRoutes.js';


export const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    console.log('data :', { userName, email, password });
    if ((userName && userName.length != 0) && (email && email.length != 0) && (password && password.length != 0)) {
        console.log("password.length ", password.length);
        if (password.length < 5) {
            return res.send({ Message: 'Password Length Must be Greater than 7' })
        } else {
            await registerUserData(userName, email, password).then((response) => {
                console.log("Response  :controller ", response);
                return res.send(response);
            }).catch((err) => {
                return res.status(400).send({ 'Error :': err.message });
            })
        }
    }
    else {
        return res.status(400).send({ Message: 'Please Enter Valid Data' })
    }
}
export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, "--", password);
    if ((email && email.length != 0) && (password && password.length != 0)) {
        await loginUser(email, password).then((response) => {
            return res.send(response);
        }).catch((err) => {
            return res.send({ "Error:": err.message })
        })
    }
    else {
        return res.status(400).send({ Message: 'Please Enter Valid Login Credentials' })
    }
}