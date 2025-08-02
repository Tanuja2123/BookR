import mongoose from 'mongoose';
import "dotenv/config"
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
        //exit with status code of 1 which means failure, if it was 0 it would mean success
    }
}
