const express = require('express');
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const subjectRoute = require("./routes/subjects");
const roomRoute = require("./routes/rooms");
const PORT = 4000;
const mongoose = require("mongoose");
require("dotenv").config();

//データベース接続
mongoose
    .connect(process.env.MONGOURL)
    .then(() =>{
    console.log("DB接続中");
    }).catch((err) => {
        console.log(err);
    });


//ミドルウェア
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/subjects",subjectRoute);
app.use("/api/rooms",roomRoute);

app.listen(PORT,() => console.log("サーバーが起動しました"));