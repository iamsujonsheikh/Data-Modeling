import mongoose, { Mongoose } from "mongoose";

const userSchema = new Mongoose.schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        }
    }
    , { timestamps: true })

export const User = mongoose.model("User", userSchema);