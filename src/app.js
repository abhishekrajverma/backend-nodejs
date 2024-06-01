import express from 'express';
import cors from 'cors'; // it enables all CORS requests 
import cookieParser from 'cookie-parser'; // it is used to parse the cookies attached to the client request object  

const app = express()


app.use(cors({
    origin: process.env.CLIENT_URL, // Allow the client to make requests to the server 
    credentials: true // Allow the client to send cookies to the server 
}))

app.use(express.json({  
    limit: '20kb',
}))                     /* when a client sends a request with a JSON payload, 
                            the server parses the JSON payload and stores it in the request.body object. 
                            earlier versions of express required the body-parser package to parse JSON payloads
                            but now express has a built-in JSON parser. mostly used for form data.
                        */

app.use(express.urlencoded({
    extended: true, // nested objects are supported 
    limit: '20kb' ,
}))    // it is used to parse the URL-encoded data sent by the client in the request body.     

app.use(express.static('public')) // it is used to serve static files from the public directory
app.use(cookieParser()) // it is used to parse the cookies attached to the client request object






export  {app}