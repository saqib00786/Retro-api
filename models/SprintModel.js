import mongoose from "mongoose";

const sprintSchema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User id is required']
    },
    sprintName: {
        type: String,
        required: [true, 'Sprint is required']
    },
    uniqueId: {
        type: String,
        require: [true, 'Unique id is required'],
        unique: [true, 'Unique id already exists']
    },
}, { timestamps: true });


export const Sprint = mongoose.model('Sprint', sprintSchema);