import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;

app.set("view engine", "pug");

app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
  console.log("El servidor esta funcionando en el puerto ", port);
});
