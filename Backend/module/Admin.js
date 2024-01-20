import mongoose from "mongoose";

const AdminRegister = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
       },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        userType:{
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER'
        },
        phoneNumber: {
            type: Number,
            required: true,
        },
        AdminFoto: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.model("AdminRegister", AdminRegister)



