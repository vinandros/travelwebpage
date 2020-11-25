import { Travel } from "../models/Travels.js";
import { Testimonial } from "../models/Testimonial.js";

const mainPage = async (req, res) => {
  // getting 3 travels
  const promiseDB = [];
  promiseDB.push(Travel.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));
  try {
    const result = await Promise.all(promiseDB);
    res.render("main", {
      page: "Inicio",
      classCss: "home",
      travels: result[0],
      testimonials: result[1],
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
