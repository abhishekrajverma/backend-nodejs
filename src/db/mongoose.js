import mongoose from "mongoose"; 
import {DB_NAME} from "../constants.js"; 


// Connect to the database
export const connectToDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\nMongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to ${DB_NAME} MONGODB_database: ${error}`);
        process.exit(1); // Exit the process if an error occurs while connecting to the database 
    }
}



