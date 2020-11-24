import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("main");
});

router.get("/us", (req, res) => {
  const viajes = "Viaje a Surfia de a";
  res.render("us", {
    viajes,
  });
});

export default router;
