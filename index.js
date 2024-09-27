import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { getSignup , getlogin , putUser , getUser , deleteUser} from "./controllers/user.js";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.get('/users' , getUser)
app.post('/signup' , getSignup);
app.post('/login' , getlogin)
app.put('/user/:id' , putUser)
app.delete('/users/:id' , deleteUser)


const MongoConnection = async () => {
  const conn = mongoose.connect(`${process.env.MONGO_URL}`);
  if (conn) {
    console.log("MongoDB Connected...✅");
  }
};
MongoConnection();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
