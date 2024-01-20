import mongoose from "mongoose";

const BlogComment = new mongoose.Schema({
    PersonName: {
        type: String,
        required: true
    },
    BlogComment: {
        type: String,
        required: true
    },
    BlogId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})

export default mongoose.model("BlogComment", BlogComment)