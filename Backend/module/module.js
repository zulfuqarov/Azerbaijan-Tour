import mongoose from "mongoose";

const MadinaTravle = new mongoose.Schema(
    {
        TravleName: {
            type: String,
            required: true,
        },
        TravleComment: {
            type: String,
            required: true,
        },
        TravlePrice: {
            type: Number,
            required: true,
        },
        TravleOldPrice: {
            type: Number,
            required: true,
        },
        TravleImg: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.model("TravleModuleSchema", MadinaTravle)