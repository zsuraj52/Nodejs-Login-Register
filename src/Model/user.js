import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
    },
},
    {
        timestamp: true
    })

const User = mongoose.model('User', adminSchema)
export default User;