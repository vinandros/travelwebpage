import { Travel } from "../models/Travels.js";
import { Testimonial } from "../models/Testimonial.js";

const mainPage = async (req, res) => {
  // getting 3 travels

  try {
    const travels = await Travel.findAll({ limit: 3 });
    res.render("main", {
      page: "Inicio",
      classCss: "home",
      travels,
    });
  } catch (error) {
    console.log(error);
  }
};

const usPage = (req, res) => {
  res.render("us", {
    page: "Nosotros",
  });
};

const testimonialsPage = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.render("testimonials", {
      page: "Testimoniales",
      testimonials: testimonials.reverse(),
    });
  } catch (error) {
    console.log(error);
  }
};

const travelsPage = async (req, res) => {
  const travels = await Travel.findAll();
  res.render("travels", {
    page: "Próximos viajes",
    travels,
  });
};

const detailsTravelsPage = async (req, res) => {
  const { slug } = req.params;
  try {
    const travel = await Travel.findOne({ where: { slug } });
    res.render("travel", {
      page: "Información Viaje",
      travel,
    });
    // console.log(result);
  } catch (error) {
    console.log(error);
    // next();
  }
};

export { mainPage, usPage, testimonialsPage, travelsPage, detailsTravelsPage };
