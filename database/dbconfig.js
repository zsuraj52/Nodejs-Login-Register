import { mongoose } from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Database is connected")
})
    .catch((err) => {
        console.log("Failed To Connect To Database! Please Try Again");
    })