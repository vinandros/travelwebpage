import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// connect DB
db.authenticate()
  .then(() => console.log("DB connected"))
  .catch(() => console.log("Error connecting to DB..."));

const port = process.env.PORT || 4000;

app.set("view engine", "pug");

// Get year
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.siteName = "Agencia de viajes";
  next();
});

// Add body parser, to read form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", router);

app.listen(port, () => {
  console.log("El servidor esta funcionando en el puerto ", port);
});
