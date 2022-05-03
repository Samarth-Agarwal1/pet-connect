import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 320,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 20
    },
    name: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    dateOfBirth: Date,
    animal: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    breed: {
        type: String,
        maxLength: 50,
        trim: true
    },
    description: {
        type: String,
        maxLength: 2000,
    },
    isBanned: Boolean,
    isAdmin: Boolean,
    isOnline: Boolean,
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const User = mongoose.model("User", UserSchema);

export default User;
