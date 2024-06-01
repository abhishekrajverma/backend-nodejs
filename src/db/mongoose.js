import mongoose from "mongoose"; 
import {DB_NAME} from "../constants.js"; 


// Connect to the database
export const connectToDatabase = async () => {
    // Check if the MONGO_URI environment variable is defined 
    if (!process.env.MONGO_URI) {
        console.error('MONGO_URI is not defined in environment variables');
        process.exit(1); // Exit the process if MONGO_URI is not defined
    }

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\nMongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`);
        /* 'connectionInstance.connection.host' - It helps you verify that your application is connected to the correct database server, 
            especially when you have multiple environments (development, staging, production) or multiple database servers.*/
    } catch (error) {
        console.error(`Error connecting to ${DB_NAME} MONGODB_database: ${error}`);
        process.exit(1); // Exit the process if an error occurs while connecting to the database 
    }
}



