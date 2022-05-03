import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
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
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
