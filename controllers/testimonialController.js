import { Testimonial } from "../models/Testimonial.js";

const saveTestimonialsPage = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const errors = [];
  if (nombre.trim() === "") {
    errors.push({ msg: "El nombre esta vacio" });
  }
  if (correo.trim() === "") {
    errors.push({ msg: "El correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errors.push({ msg: "El mensaje esta vacio" });
  }
  if (errors.length >= 1) {
    //get testimonials
    const testimonials = await Testimonial.findAll();
    //retur errors
    res.render("testimonials", {
      page: "Testimoniales",
      errors,
      nombre,
      correo,
      mensaje,
      testimonials,
    });
  } else {
    // save testimonial to DB
    try {
      const testimonials = await Testimonial.findAll();
      await Testimonial.create({
        nombre,
        email: correo,
        mensaje,
      });
      res.render("testimonials", {
        page: "Testimoniales",
        msg: "Gracias por tus comentarios!",
        testimonials: testimonials.reverse(),
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export { saveTestimonialsPage };
