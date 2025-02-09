import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
import path from "path";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;

//connect to monogDB
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose.connect(DB).then(() => console.log("DB connection successfull"));

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

//deployment
// if (process.env.NODE_ENV === "production") {
//   const dirPath = path.resolve();
//   app.use(express.static("Frontend/dist"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(dirPath, "Frontend", "dist", "index.html"));
//   });
// }
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
