import mongoose from "mongoose";

const travleInfo = mongoose.Schema({
    TourPlan: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
    Gallery: {
        type: [String],
        required: true,
    },
    Information: {
        type: String,
        required: true,
    },
    TravleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }

})
export default mongoose.model("TravleMoreInfo", travleInfo)







