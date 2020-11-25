import express from "express";
import {
  mainPage,
  usPage,
  testimonialsPage,
  travelsPage,
  detailsTravelsPage,
} from "../controllers/pagesController.js";

import { saveTestimonialsPage } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", mainPage);

router.get("/travels", travelsPage);
router.get("/travels/:slug", detailsTravelsPage);

router.get("/testimonials", testimonialsPage);
router.post("/testimonials", saveTestimonialsPage);

router.get("/us", usPage);

export default router;
