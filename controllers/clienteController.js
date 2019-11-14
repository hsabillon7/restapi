const Cliente = require("../models/Cliente");

// Agregar un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  const cliente = new Cliente(req.body);

  try {
    await cliente.save();
    // res.json({ mensaje: "Se agregó correctamente el nuevo cliente" });
    res
      .status(200)
      .send({ mensaje: "Se agregó correctamente el nuevo cliente" });
  } catch (error) {
    // console.log(error);
    res
      .status(422)
      .send({
        error: "Ha ocurrido un error al momento de almacenar el cliente"
      });
  }
};
