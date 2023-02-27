import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/home";
import routerAdmin from "./router/admin";
const app = express();
// app
app.use(morgan("tiny"));
app.use(cors());

// connect DB
mongoose.connect("mongodb://localhost:27017/test");

//route
// app.get("/", (req, res) => {
//   return res.send("Hello World");
// });
app.get("/", router);
app.get("/admin", routerAdmin);
// Route middleware

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
