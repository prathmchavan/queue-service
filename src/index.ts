import express, { Application } from "express"
import dotenv from "dotenv";
import router from "./routes";

const app : Application = express();
app.use(express.json());
dotenv.config({ path: '.env' }); 
const port  = process.env.PORT

app.use('/',router);

app.listen(port , ()=>{
    console.log(`server is live on ${port} `);
})