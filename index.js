import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import {connectDB} from './config/connectDB.js'
import userRoutes from './routes/userRoutes.js'
import submissionRoutes from './routes/submissionRoutes.js'


const app = express();
 
const allowedOrigins = ["http://localhost:5173","https://feedback-frontend-tau-nine.vercel.app"];
app.use(cors({ origin: allowedOrigins, credentials: true }));

//middlewares
app.use(cookieParser());
app.use(express.json());

// Api endpoints
app.use("/api/user",userRoutes)
app.use("/api/submission",submissionRoutes)


app.get("/", (req, res) => {
  res.send("✅ Ai backend is running.");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
connectDB();

  console.log(`Server is running on port ${PORT}`);

});