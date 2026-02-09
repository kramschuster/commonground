import { Schema, model } from 'mongoose';

// Define the Issue schema
const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['open', 'in progress', 'closed'],
        default: 'open'
    },
    assignee: {
        type: String,
        required: false
    },
    comments: [{
        user: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});

// Create the model
const Issue = model('Issue', issueSchema);

export default Issue;