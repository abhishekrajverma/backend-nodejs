import dotenv from 'dotenv';
import {connectToDatabase} from './db/mongoose.js'
import {app} from './app.js';
// Load environment variables from the .env file 
dotenv.config({
    path: './.env' // Path to the .env file
});


// Connect to the database and start the server
connectToDatabase()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error(`Error connecting to the database: ${error}`);
    throw error;
})













/*
    The code below is used to connect to the database and start the server but it is not recommended to use this code in a production environment use the code in the db folder instead 

;(async() => { // ; is used to avoid any conflicts with other code that may be concatenated to this file 
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on('error', (error) => { // Listen for any errors that occur while connecting to the database 
            console.error(`Error: ${error}`);
            throw error;
        });
        console.log(`Connected to ${DB_NAME} MONGODB-database`);
        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error(`Error connecting to ${DB_NAME} database: ${error}`);
        throw error;
    }
})()
*/