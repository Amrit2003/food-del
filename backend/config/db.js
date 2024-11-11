import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:7840030257@cluster0.uizk8.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}