import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodItems:tanikaerror@cluster0.e0yoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DataBase Connected"));
} 