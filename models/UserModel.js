import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        require: [true, 'Password is required']
    }
}, { timestamps: true });


export const User = mongoose.model('User', userSchema);