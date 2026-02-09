// User model/schema

import { Schema, model } from 'mongoose';

// Defining the User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Middleware to update updatedAt on save
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Creating the User model
const User = model('User', userSchema);

export default User;
