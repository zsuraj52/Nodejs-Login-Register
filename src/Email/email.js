import dotenv from 'dotenv';
dotenv.config();
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.sendGrid_API_KEY)
let contact = 'contact@suraj.com';
export const sendWelcomeEmail = async (email, name) => {
    sgMail.send({
        to: email,
        from: 'suraj.zurange@thinkitive.com',
        subject: `Welcome! ${name}!`,
        text: `Hello,${name} .this is the practice of sendGrid mail. Hope you liked it.`
    }).then(() => {
        console.log('Email sent')
    })
        .catch((error) => {
            console.error(error)
        })
}

export const sendRemovedEmail = async (email, name) => {
    sgMail.send({
        to: email,
        from: 'suraj.zurange@thinkitive.com',
        subject: 'You have logged Out!',
        text: `hello,${name} . We detected that u have logged out from our app. If it's Not You, Please Fell Free to Contact Us at ${contact} `
    }).then(() => {
        console.log('Email sent')
    })
        .catch((error) => {
            console.error(error)
        })
}

