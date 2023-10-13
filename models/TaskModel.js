import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    taskId: {
        type: String,
        required: [true, 'Task id must be required'],
        unique: [true, 'Task id already exists']
    },
    userId: {
        type: String,
        required: [true, 'User id must be required']
    },
    taskType: {
        type: String,
        require: [true, 'Task type is required'],
    },
    taskDescription: {
        type: String,
    }
}, { timestamps: true });


export const Task = mongoose.model('Task', taskSchema);