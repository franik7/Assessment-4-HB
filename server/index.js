const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/time", controller.getTime);
app.get("/api/luckynum", controller.getLuckyNum);
app.get("/api/video", controller.getVideo);
app.post("/api/age", controller.postAge);
app.get("/api/wine", controller.getWine);

app.listen(4000, () => console.log("Server running on 4000"));
