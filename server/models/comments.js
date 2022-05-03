import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        maxLength: 63206,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;