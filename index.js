import express from "express";
import { dbConnect } from "./db_connect.js";
import userRoutes from "./user/user.route.js"
import cors from "cors";
import parkingRoutes from "./parking/parking.route.js"

const app =express();

app.use(express.json());
app.use(cors({origin:"*"}));
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});



app.use(userRoutes);
app.use(parkingRoutes);
await dbConnect();

const port = process.env.PORT;
console.log(port);

app.listen(port,()=>{
    console.log(`App is listening on port ${port}..`);
})