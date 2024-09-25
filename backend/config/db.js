import mongoose from "mongoose";

 export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://AndrejAntonio:123456789AA@cluster0.omxim.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}